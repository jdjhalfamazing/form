document.addEventListener('DOMContentLoaded', function () {
    const calendarContainer = document.getElementById('calendar-container');

    // Define days of the week for display
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    // Generate calendar
    function generateCalendar(year, month) {
        // Helper function to format date as YYYY-MM-DD
        function formatDate(date) {
            return date.toISOString().split('T')[0];
        }

        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const firstDayIndex = new Date(year, month, 1).getDay();

        // Clear previous calendar content
        calendarContainer.innerHTML = '<div class="calendar-row">';

        // Create headers for days of the week
        daysOfWeek.forEach(day => {
            calendarContainer.innerHTML += `<div class="calendar-date">${day}</div>`;
        });

        calendarContainer.innerHTML += '</div><div class="calendar-row">';

        // Fill in the blank spaces for the first row of the calendar
        for (let i = 0; i < firstDayIndex; i++) {
            calendarContainer.innerHTML += '<div class="calendar-date disabled"></div>';
        }

        // Populate the calendar with actual days
        for (let i = 1; i <= daysInMonth; i++) {
            calendarContainer.innerHTML += `<div class="calendar-date">${i}</div>`;
            if ((i + firstDayIndex) % 7 === 0) {
                calendarContainer.innerHTML += '</div><div class="calendar-row">';
            }
        }

        calendarContainer.innerHTML += '</div>';
    }

    // Set up the current date and generate the calendar
    const currentDate = new Date();
    generateCalendar(currentDate.getFullYear(), currentDate.getMonth());
});
