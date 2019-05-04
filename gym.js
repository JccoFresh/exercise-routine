//I would like an exercise routine I can carry out at the gym or at home. (Which exercises do I execute on which day)
//API request daysofweek
let request = new XMLHttpRequest(); //exercise image request
let url = "https://wger.de/api/v2/daysofweek/?format=json";

request.open("GET", url, true);
request.setRequestHeader('Authorization', 'Token 2af6480d6fc89f692fcc471714fe36c76d4d89a2');
request.onload = function() {
    let data = JSON.parse(this.response);
    let daysofweek = document.getElementById("daysofweek");
    let rowCounter = 0;
    let row = null;
    if (request.status >= 200 && request.status < 400) {
        //condition for when request is succesful, status code of request 
        let advanced = document.getElementById("advanced");
       let days = data.results;
       let values = Object.values(days);
       for(let i=0; i <values.length; i++) {
           //Card Back content
           let dayBack = document.createElement('p');
           dayBack.className = "day";
           dayBack.id = [i]; 
        //   if(advanced.onclick == true) {
        //       dayBack.id = 2;
        //   }
           if(dayBack.id == i) {
                dayBack.innerHTML = info.gymResults[i].exercises;   
                if(dayBack.innerHTML == "Rest Day") {
                    dayBack.className = "day restDay dayWord vertical-align";
                }
           }
        //   } else if(dayBack.id== 2) {
        //          dayBack.textContent = info.gymResults[i].advanced;
        //   }
           
           //amount of elements per row
            if(rowCounter % 2 == 0 ){
                 row = document.createElement('div');
                 row.className = "row center";
                 daysofweek.appendChild(row);
             }    
             
           let flipCard = document.createElement('div'); 
           flipCard.className = "flip-card";
           let flipCardInner = document.createElement('div'); 
           flipCardInner.className = "flip-card-inner";
           let flipCardFront = document.createElement('div');
           flipCardFront.className = "flip-card-front"; 
           let flipCardBack = document.createElement('div');
           flipCardBack.className = "flip-card-back";
           //creates the placeholder divs
           let day = document.createElement('p');
           day.className = "day dayWord vertical-align";
           day.textContent = values[i].day_of_week; 
           // Front content
           let col = document.createElement('div');
           col.className = "col-md-1";
           //adds spacing
           flipCardFront.appendChild(day); 
           flipCardBack.appendChild(dayBack);    
           flipCardInner.appendChild(flipCardFront);
           flipCardInner.appendChild(flipCardBack);
           flipCard.appendChild(flipCardInner);
           row.appendChild(flipCard);
           row.appendChild(col);
           rowCounter++;
       }
    }
};
request.send();

//content
let info = {
    "gymResults": [
        {
            id: 1,
            exercises: "<p>Chest: Barbell Bench Press - 4 sets of 8 reps</p><p>Back: Lat-pulldowns - 4 sets of 10 reps</p><p>Shoulders: Seated Dumbbell Press - 4 sets of 10 reps</p><p>Legs: Leg Extensions - 4 sets of 10 reps</p><p>Biceps: Barbell Bicep Curls - 3 sets of 10 reps</p><p>Triceps: Triceps Rope Pushdowns - 3 sets of 15 reps</p>",
            advanced: "Chest: Dumbbell Bench Press - 3 sets of 10, 10, 8 (adding weight) reps <br> Incline Dumbbell Bench Press - 3 sets of 10 reps <br> Chest Dip - 3 sets of MAX reps <br> Triceps: Lying Triceps Extension - 3 sets of 8-10 reps <br> One Arm Dumbbell Extension - 3 sets of 10 reps <br> Tricep Extension - 3 sets of 10 reps <br> Shoulders: Barbell Front Raise - 4 sets of 12 reps <br> Dumbbell Lateral Raise - 4 sets of 15, 12, 8, 8 (adding weight) reps"
            
        },
        {
            id: 2,
            exercises: "Rest Day"
        },
        {
            id: 3,
            exercises: "<p>Legs: Leg Press Machine - 4 sets of 8 reps</p><p>Triceps: Overhead Bar Extensions - 3 sets of 20 reps</p><p>Biceps: EZ Bar Curls - 4 sets of 10 reps</p><p>Chest: Machine Chest Press - 4 sets of 10 reps</p><p>Back: Seated Cable Row - 4 sets of 10 reps</p><p>Shoulders: Lateral Raises - 3 sets of 20 reps</p>"

        },
        {
            id: 4,
            exercises: "Rest Day"
        },
        {
            id: 5,
            exercises: "<p>Shoulders: EZ Bar Upright Rows - 3 sets of 15 reps</p><p>Back: Close-Grip Pulldowns - 4 sets of 12 reps</p><p>Chest: Cable Fly - 4 sets of 10 reps</p><p>Legs: Lunges - 3 sets of 10 reps per leg</p><p>Triceps: Lying tricep extensions - 3 sets of 15 reps</p><p>Biceps: Hammer Curls - 3 sets of 12 reps</p>"
        },
        {
            id: 6,
            exercises: "<p>Chest: Dumbbell Bench Press - 3 sets of 10, 10, 8 (adding weight) reps</p><p>Chest Dip - 3 sets of MAX reps</p><p>Triceps: Lying Triceps Extension - 3 sets of 8-10 reps</p><p>One Arm Dumbbell Extension - 3 sets of 10 reps</p><p>Shoulders: Barbell Front Raise - 4 sets of 12 reps</p>"
        },
        {
            id: 7,
            exercises: "Rest Day"
        }
    ]
};

//scroll function
var shiftWindow = function() {
     scrollBy(0, -50); 
 };
window.addEventListener("hashchange", shiftWindow);

function load() { 
    if (window.location.hash) 
    shiftWindow(); 
}
