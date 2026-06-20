import express from 'express';
import Database from 'better-sqlite3';

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to SQLite database
const db = new Database('./db/analytics.db');

console.log('Connected to SQLite database');

// Create tables
db.exec(`
    CREATE TABLE IF NOT EXISTS metrics (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        metric_name TEXT UNIQUE,
        metric_value INTEGER DEFAULT 0
    );

    CREATE TABLE IF NOT EXISTS visitors (
        ip_address TEXT PRIMARY KEY,
        first_visit TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
`);

// Initialize total_views metric
db.prepare(`
    INSERT OR IGNORE INTO metrics (metric_name, metric_value)
    VALUES ('total_views', 0)
`).run();

app.use(express.static('public'));

// Track visits middleware
app.use((req, res, next) => {
    if (req.url === '/favicon.ico') {
        return next();
    }

    const visitorIp =
        req.headers['x-forwarded-for'] ||
        req.socket.remoteAddress ||
        'unknown';

    try {
        // Increment page views
        db.prepare(`
            UPDATE metrics
            SET metric_value = metric_value + 1
            WHERE metric_name = 'total_views'
        `).run();

        // Register unique visitor
        db.prepare(`
            INSERT OR IGNORE INTO visitors (ip_address)
            VALUES (?)
        `).run(visitorIp);

    } catch (error) {
        console.error('Analytics error:', error.message);
    }

    next();
});

// Analytics dashboard
app.get('/api/stats', (req, res) => {
    try {
        const views = db.prepare(`
            SELECT metric_value
            FROM metrics
            WHERE metric_name = 'total_views'
        `).get();

        const uniques = db.prepare(`
            SELECT COUNT(*) AS unique_count
            FROM visitors
        `).get();
        res.json({
            totalViews: views?.metric_value ?? 0,
            uniqueVisitors: uniques?.unique_count ?? 0
        });

    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

