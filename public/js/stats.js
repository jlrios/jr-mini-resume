async function loadStats() {
    const response = await fetch('/api/stats');
    const data = await response.json();

    document.getElementById('totalViews').textContent = data.totalViews;
    document.getElementById('uniqueVisitors').textContent = data.uniqueVisitors;
}