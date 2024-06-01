document.addEventListener('DOMContentLoaded', function () {
    const calendarContainer = document.getElementById('calendar');
    const addedWorkoutContainer = document.getElementById('added-workout-container');

    // Function to format date as YYYY-MM-DD
    function formatDate(date) {
        return date.toISOString().split('T')[0];
    }

    // Generate calendar
    function generateCalendar(year, month) {
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const firstDayIndex = new Date(year, month, 1).getDay();
        const lastDayIndex = new Date(year, month, daysInMonth).getDay();

        const prevMonthDays = firstDayIndex === 0 ? 6 : firstDayIndex - 1;
        const nextMonthDays = lastDayIndex === 0 ? 0 : 7 - lastDayIndex;

        const totalDays = prevMonthDays + daysInMonth + nextMonthDays;

        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const monthName = months[month];

        calendarContainer.innerHTML = '';

        let dates = '';
        for (let i = 1; i <= totalDays; i++) {
            let currentDate = new Date(year, month, i - prevMonthDays);
            let date = currentDate.getDate();
            let dateString = formatDate(currentDate);

            if (i <= prevMonthDays || i > (daysInMonth + prevMonthDays)) {
                dates += `<div class="calendar-date disabled">${date}</div>`;
            } else {
                dates += `<a href="add-workout.html?date=${dateString}" class="calendar-date">${date}</a>`;
            }
        }

        calendarContainer.innerHTML = `
        <h2>${monthName} ${year}</h2>
        <div class="calendar-grid">${dates}</div>
      `;
    }

    // Function to update added workouts on the main page
    function updateAddedWorkouts() {
        addedWorkoutContainer.innerHTML = '';
        const storedWorkouts = JSON.parse(localStorage.getItem('addedWorkouts')) || [];
        storedWorkouts.forEach((workout, index) => {
            const workoutDiv = document.createElement('div');
            workoutDiv.classList.add('added-workout');
            workoutDiv.innerHTML = `
          <h3>Added Workout:</h3>
          <p><strong>Date:</strong> ${workout.date}</p>
          <p><strong>Workout Type:</strong> ${workout.workoutType}</p>
          <p><strong>Sub Workout:</strong> ${workout.subWorkout}</p>
          <p><strong>Specific Workout:</strong> ${workout.specificWorkout}</p>
          <p><strong>Duration:</strong> ${workout.duration} minutes</p>
          <p><strong>Intensity:</strong> ${workout.intensity}/10</p>
          <p><strong>Sets:</strong> ${workout.sets}</p> 
          <p><strong>Reps:</strong> ${workout.reps}</p> 
          <button class="delete-workout" data-index="${index}">Delete</button>
        `;
            addedWorkoutContainer.appendChild(workoutDiv);
        });

        // Add event listener to delete workout buttons
        const deleteButtons = document.querySelectorAll('.delete-workout');
        deleteButtons.forEach(button => {
            button.addEventListener('click', function () {
                const index = parseInt(this.getAttribute('data-index'));
                deleteWorkout(index);
            });
        });
    }

    // Function to delete a workout
    function deleteWorkout(index) {
        const storedWorkouts = JSON.parse(localStorage.getItem('addedWorkouts')) || [];
        storedWorkouts.splice(index, 1);
        localStorage.setItem('addedWorkouts', JSON.stringify(storedWorkouts));
        updateAddedWorkouts(); // Update the displayed workouts after deletion
    }

    // Initial setup
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    generateCalendar(currentYear, currentMonth);
    updateAddedWorkouts();
});
