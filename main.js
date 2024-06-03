// Stopwatch
let [milliseconds, seconds, minutes, hours] = [0,0,0,0];
let timeRef = document.querySelector(".timerdisplay");
let int = null;

document.querySelector("#start").onclick = function(){
    if(int !== null){
        clearInterval(int);
    }
    int = setInterval(displayTimer, 10);
};

document.querySelector("#pause").onclick = function(){
    clearInterval(int);
};

document.querySelector("#reset").onclick = function(){
    clearInterval(int);
    [milliseconds, seconds, minutes, hours] = [0,0,0,0];
    timeRef.innerHTML = "00 : 00 : 00 : 000";
};

function displayTimer() {
    milliseconds += 10;
    if(milliseconds == 1000){
        milliseconds = 0;
        seconds++;
        if(seconds == 60){
            seconds = 0;
            minutes++;
            if(minutes == 60){
                minutes = 0;
                hours++;
            }
        }
    }

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;

    timeRef.innerHTML = `${h} : ${m} : ${s} : ${ms}`
}

// To Do List
document.querySelector("#push").onclick = function(){
    if(document.querySelector("#newtask input").value.length == 0){
        alert("Please input a task")
    } else {
        document.querySelector("#tasks").innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector("#newtask input").value}
                </span>
                <button class="delete">
                    <i class="fa-regular fa-trash-can"></i>
                </button>
            </div>

        `;

        let currentTasks = document.querySelectorAll(".delete");

        for(let i = 0; i < currentTasks.length; i++){
            currentTasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }

        if(currentTasks.length !== 0){
            document.querySelector(".notask").style.display = "none";
        }

        let tasks = document.querySelectorAll(".task");

        for(let i = 0; i < tasks.length; i++){
            tasks[i].onclick = function(){
                this.classList.toggle("completed");
            }
        }

        document.querySelector("#newtask input").value = "";
    }
}