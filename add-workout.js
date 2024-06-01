document.addEventListener('DOMContentLoaded', function () {
    const selectedDateSpan = document.getElementById('selected-date');
    const workoutTypeSelect = document.getElementById('workout-type');
    const subWorkoutContainer = document.getElementById('sub-workout-container');
    const subWorkoutSelect = document.getElementById('sub-workout');
    const specificWorkoutContainer = document.getElementById('specific-workout-container');
    const specificWorkoutSelect = document.getElementById('specific-workout');
    const durationInput = document.getElementById('duration');
    const intensityInput = document.getElementById('intensity');
    const setsInput = document.getElementById('sets'); // New sets input
    const repsInput = document.getElementById('reps'); // New reps input
    const caloriesBurnedDiv = document.getElementById('calories-burned');
    const caloriesSpan = document.getElementById('calories');

    // Define sub-workouts for each workout type
    const subWorkouts = {
        cardio: ["Swimming", "Running", "Cycling", "Boxing", "Jump Rope", "HIIT"],
        strength: ["Weightlifting", "Bodyweight Exercises", "Resistance Bands", "Kettlebell", "CrossFit"],
        yoga: ["Hatha", "Vinyasa", "Ashtanga", "Bikram", "Yin", "Power Yoga"]
        // Add more sub-workouts as needed
    };

    // Define specific workouts for each sub-workout
    const specificWorkouts = {
        Swimming: ["Freestyle", "Backstroke", "Breaststroke", "Butterfly"],
        Running: ["Long Distance", "Sprints", "Trail Running", "Interval Training"],
        Cycling: ["Road Cycling", "Mountain Biking", "Indoor Cycling", "Sprint Cycling"],
        Boxing: ["Heavy Bag", "Speed Bag", "Sparring", "Jump Rope"],
        HIIT: ["Tabata", "AMRAP", "EMOM", "Circuit Training"],
        Weightlifting: ["Bench Press", "Deadlift", "Squat", "Overhead Press"],
        "Bodyweight Exercises": ["Push-ups", "Pull-ups", "Squats", "Planks"],
        "Resistance Bands": ["Chest Press", "Row", "Bicep Curl", "Tricep Extension"],
        Kettlebell: ["Swings", "Turkish Get-up", "Goblet Squat", "Clean"],
        CrossFit: ["WOD 1", "WOD 2", "WOD 3", "WOD 4"],
        Hatha: ["Sun Salutation", "Warrior Pose", "Tree Pose", "Downward Dog"],
        Vinyasa: ["Chaturanga", "Upward Dog", "Dancer Pose", "Crow Pose"],
        Ashtanga: ["Primary Series", "Secondary Series", "Half Primary", "Mysore Style"],
        Bikram: ["26 Postures", "Hot Yoga", "Sweat Session", "Standing Series"],
        Yin: ["Butterfly Pose", "Dragon Pose", "Child's Pose", "Twisted Roots"],
        "Power Yoga": ["Core Power", "Flow Yoga", "Inversion Practice", "Arm Balance Workshop"]
        // Add more specific workouts as needed
    };

    // Function to calculate calories burned
    function calculateCaloriesBurned(duration, intensity) {
        // Example formula (you can replace it with your own formula)
        return Math.round(duration * (intensity / 10) * 5);
    }

    // Function to update calories burned based on inputs
    function updateCaloriesBurned() {
        const duration = parseInt(durationInput.value) || 0;
        const intensity = parseInt(intensityInput.value) || 0;
        const caloriesBurned = calculateCaloriesBurned(duration, intensity);
        caloriesSpan.textContent = caloriesBurned;
        caloriesBurnedDiv.style.display = 'block';
    }

    // Populate sub-workout select based on workout type
    function populateSubWorkouts(workoutType) {
        // Clear previous options
        subWorkoutSelect.innerHTML = '';

        // Populate sub-workout options based on the selected workout type
        if (workoutType in subWorkouts) {
            subWorkoutContainer.style.display = 'block';
            subWorkouts[workoutType].forEach(subWorkout => {
                const option = document.createElement('option');
                option.value = subWorkout;
                option.textContent = subWorkout;
                subWorkoutSelect.appendChild(option);
            });
        } else {
            subWorkoutContainer.style.display = 'none';
        }
    }

    // Populate specific workout select based on sub-workout
    function populateSpecificWorkouts(subWorkout) {
        // Clear previous options
        specificWorkoutSelect.innerHTML = '';

        // Populate specific workout options based on the selected sub-workout
        if (subWorkout in specificWorkouts) {
            specificWorkoutContainer.style.display = 'block';
            specificWorkouts[subWorkout].forEach(workout => {
                const option = document.createElement('option');
                option.value = workout;
                option.textContent = workout;
                specificWorkoutSelect.appendChild(option);
            });
        } else {
            specificWorkoutContainer.style.display = 'none';
        }
    }

    // Handle workout type change
    workoutTypeSelect.addEventListener('change', function () {
        const selectedWorkoutType = this.value;
        populateSubWorkouts(selectedWorkoutType);
    });

    // Handle sub-workout change
    subWorkoutSelect.addEventListener('change', function () {
        const selectedSubWorkout = this.value;
        populateSpecificWorkouts(selectedSubWorkout);
    });

    // Handle form submission
    document.getElementById('workout-form').addEventListener('submit', function (event) {
        event.preventDefault();
        updateCaloriesBurned();
        addWorkout();
    });

    // Function to add workout to main page
    function addWorkout() {
        const selectedDate = selectedDateSpan.textContent;
        const workoutType = workoutTypeSelect.value;
        const subWorkout = subWorkoutSelect.value;
        const specificWorkout = specificWorkoutSelect.value;
        const duration = parseInt(durationInput.value) || 0;
        const intensity = parseInt(intensityInput.value) || 0;
        const sets = parseInt(setsInput.value) || 0; // New sets value
        const reps = parseInt(repsInput.value) || 0; // New reps value
        const caloriesBurned = parseInt(caloriesSpan.textContent) || 0;

        const workout = {
            date: selectedDate,
            workoutType: workoutType,
            subWorkout: subWorkout,
            specificWorkout: specificWorkout,
            duration: duration,
            intensity: intensity,
            sets: sets,
            reps: reps,
            caloriesBurned: caloriesBurned
        };

        // Get stored workouts or initialize an empty array
        let storedWorkouts = JSON.parse(localStorage.getItem('addedWorkouts')) || [];

        // Add the new workout to the stored workouts array
        storedWorkouts.push(workout);

        // Store the updated workouts array in local storage
        localStorage.setItem('addedWorkouts', JSON.stringify(storedWorkouts));

        // Clear form inputs
        document.getElementById('workout-form').reset();

        // Reset calories burned display
        caloriesBurnedDiv.style.display = 'none';

        // Refresh added workouts on the main page
        refreshAddedWorkouts();
    }

    // Function to refresh added workouts on the main page
    function refreshAddedWorkouts() {
        // Clear previous added workouts
        const addedWorkoutContainer = document.getElementById('added-workout-container');
        addedWorkoutContainer.innerHTML = '';

        // Retrieve stored workouts from local storage
        const storedWorkouts = JSON.parse(localStorage.getItem('addedWorkouts')) || [];

        // Iterate through stored workouts and display them
        storedWorkouts.forEach(workout => {
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
          <p><strong>Sets:</strong> ${workout.sets}</p> // Display sets
          <p><strong>Reps:</strong> ${workout.reps}</p> // Display reps
          <p><strong>Calories Burned:</strong> ${workout.caloriesBurned}</p>
        `;
            addedWorkoutContainer.appendChild(workoutDiv);
        });
    }

    // Initial setup
    const urlParams = new URLSearchParams(window.location.search);
    const selectedDate = urlParams.get('date');
    selectedDateSpan.textContent = selectedDate;
});
