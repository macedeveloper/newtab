document.addEventListener("DOMContentLoaded", () => {
    const bgImage = document.getElementById('background');
    const now = new Date();
    
    const month = now.getMonth(); // Jan is 0, Dec is 11
    const date = now.getDate();

    // Check if date is Dec 24th or later OR Jan 7th or earlier
    const isHolidaySeason = (month === 11 && date >= 17) || (month === 0 && date <= 14);

    if (isHolidaySeason) {
        bgImage.src = "assets/waves-snow.svg";
    }
});