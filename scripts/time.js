function updateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    document.getElementById('time_display').textContent = `${hours}:${minutes}`;
    document.getElementById('time_display_sec').textContent = seconds;
}

updateTime(); // First tick
setInterval(updateTime, 1000); // Every second
