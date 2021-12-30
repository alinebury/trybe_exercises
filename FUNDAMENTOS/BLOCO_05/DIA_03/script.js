function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
};
  
createDaysOfTheWeek();
  
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
function calendarDay(){
    const daysList = document.querySelector("#days");

    for(let i=0 ; i<dezDaysList.length ; i++){
        const day = dezDaysList[i];
        const dayItem = document.createElement("li");

        if(day === 24 || day === 31){
            dayItem.className = "day holiday";
            dayItem.innerText = day;
            daysList.appendChild(dayItem);
        }else if(day === 4 || day === 11 || day === 18){
            dayItem.className = "day friday";
            dayItem.innerText = day;
            daysList.appendChild(dayItem);
        }else if(day === 25){
            dayItem.className = "day holiday friday";
            dayItem.innerText = day;
            daysList.appendChild(dayItem);
        }else{
            dayItem.className = "day";
            dayItem.innerText = day;
            daysList.appendChild(dayItem);
        }
    }
}
calendarDay();

function holidayButton(string){
    const buttonsContainer =  document.querySelector(".buttons-container");
    const button = document.createElement("button");

    button.innerText = string;
    button.id = "btn-holiday";
    buttonsContainer.appendChild(button);
}
holidayButton("Feriados");

function holidayColor(){
    const holidayButton = document.querySelector("#btn-holiday");
    const holidayDays = document.querySelectorAll(".holiday");

    holidayButton.addEventListener("click", function(){
        for(let i=0 ; i<holidayDays.length ; i++){
            if(holidayDays[i].style.backgroundColor === "white"){
                holidayDays[i].style.backgroundColor = "rgb(238,238,238)";
            }else{
                holidayDays[i].style.backgroundColor = "white"
            }
        }
    });
}
holidayColor();

function buttonFriday(string){
    const buttonsContainer = document.querySelector(".buttons-container");
    const newButton =  document.createElement("button");

    newButton.innerText = string;
    newButton.id = "btn-friday";

    buttonsContainer.appendChild(newButton);
}
buttonFriday("Sexta-feira");

function fridayColor(array){
    const fridayButton = document.querySelector("#btn-friday");
    const fridayDays = document.querySelectorAll(".friday");

    fridayButton.addEventListener("click", function(){
        for(let i=0 ; i<fridayDays.length ; i++){
            if(fridayDays[i].innerText !== "SEXTOU"){
                fridayDays[i].innerHTML = "SEXTOU";
            }else{
                fridayDays[i].innerHTML = array[i];
            }
        }
    });
}
const array = [4, 11, 18, 25];
fridayColor(array);

function zoom(){
    const days = document.querySelector("#days");

    days.addEventListener("mouseover", function(event){
        event.target.style.fontSize = "50px";
    })
}
function zoomOut(){
    const days = document.querySelector("#days");

    days.addEventListener("mouseout", function(event){
        event.target.style.fontSize = '20px';
    })
}
zoom();
zoomOut();

function tasks(string){
    const divTask = document.querySelector(".my-tasks");
    const span = document.createElement("span");

    span.innerText = string;
    divTask.appendChild(span);
}
tasks("cozinhar");

function taskColor(color){
    const divTask = document.querySelector(".my-tasks");
    const div = document.createElement("div");

    div.className = "task";
    div.style.backgroundColor = color;
    divTask.appendChild(div);
}
taskColor("blue");

function classTask(){
    const taskSelected = document.getElementsByClassName('task selected');
    const myTask = document.querySelector('.task');

    myTask.addEventListener("click", function(event){
        if(taskSelected.length === 0){
            event.target.className = "task selected";
        }else{
            event.target.className = 'task';
        }
    })
}
classTask();

function daysColor(){
    const taskSelected = document.getElementsByClassName('task selected');
    const days = document.querySelector("#days");
    const taskDiv = document.querySelector(".task");
    const taskColor = taskDiv.style.backgroundColor;

    days.addEventListener("click", function(event){
        const eventTargetColor = event.target.style.color;

        if(taskSelected.length > 0 && eventTargetColor !== taskColor){
            const color = taskSelected[0].style.backgroundColor;
            event.target.style.color = color;
        }else if(eventTargetColor === taskColor && taskSelected.length !== 0){
            event.target.style.color = "rgb(119,119,119)";
        }
    });
}
daysColor();

function addNewTask(){
    const input = document.querySelector('#task-input');
    const buttonInput = document.querySelector('#btn-add');
    const taskList = document.querySelector('.task-list');

    buttonInput.addEventListener("click", function(){
        if(input.value.length > 0){
            const newLi = document.createElement("li");
            newLi.innerText = input.value;

            taskList.appendChild(newLi);
            input.value = "";
        }
    });

    input.addEventListener("keyup", function(event){
        if(event.key === "Enter" && input.value.length > 0){
            const newLi = document.createElement("li");
            newLi.innerText = input.value;

            taskList.appendChild(newLi);
            input.value = "";
        }
    });
}
addNewTask();


