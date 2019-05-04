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
           dayBack.className = "day2";
           dayBack.id = [i]; 
        //   if(advanced.onclick == true) {
        //       dayBack.id = 2;
        //   }
           if(dayBack.id == i) {
                dayBack.innerHTML = info.homeResults[i].exercises;   
                if(dayBack.innerHTML == "Rest Day") {
                    dayBack.className = "day2 restDay dayWord vertical-align";
                }
           }
        //   } else if(dayBack.id== 2) {
        //          dayBack.textContent = info.homeResults[i].advanced;
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
           day.className = "day2 dayWord vertical-align";
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
    "homeResults": [
        {
            id: 1,
            exercises: "<br><p>Push-ups - 3 sets of 12 reps</p><p>Lunges - 3 sets of 10 reps</p><p>Squats - 3 sets of 12 reps</p><p>Plank (increase duration as you improve 1-5 mins)</p>" 

        },
        {
            id: 2,
            exercises: "<p>Bicep Curls - 3 sets of 10-12 reps (increase weight once done with ease)<p><p>Lateral Raises - 3 sets of 10-12 reps</p><p>Wall Squats - 20s to 3 min (increase overtime)</p><p>Overhead Press - 3 sets of 10 (sit in chair)</p>"
        },
        {
            id: 3,
            exercises: "<br><p>Push-ups - 3 sets of 12 reps</p><p>Lunges - 3 sets of 10 reps</p><p>Squats - 3 sets of 12 reps</p><p>Plank (increase duration as you improve 1-5 mins)</p>" 
        },
        {
            id: 4,
            exercises: "Rest Day"
        },
        {
            id: 5,
            exercises: "<p>Squat Jumps - 4 sets of 8 reps</p><p>Push-ups - 3 sets of 12 reps</p><p>Bent-Knee Sit-up / Crunches - 3 sets of 10 reps</p><p>Burpees - 3 sets of 12 reps</p><p>Side Plank (increase duration as you improve 1-5 mins)</p>"
        },
        {
            id: 6,      
            exercises: "<p>Bicep Curls - 3 sets of 10-12 reps (increase weight once done with ease)<p><p>Lateral Raises - 3 sets of 10-12 reps</p><p>Wall Squats - 20s to 3 min (increase overtime)</p><p>Overhead Press - 3 sets of 10 (sit in chair)</p>"
        },
        {
            id: 7,
            exercises: "<p>Squat Jumps - 4 sets of 8 reps</p><p>Push-ups - 3 sets of 12 reps</p><p>Bent-Knee Sit-up / Crunches - 3 sets of 10 reps</p><p>Burpees - 3 sets of 12 reps</p><p>Side Plank (increase duration as you improve 1-5 mins)</p>"
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
