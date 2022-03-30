
//Selecting parts
const styleHouse = document.head.appendChild(document.createElement("style"));
const walls = document.querySelector(".house");

//Selecting array of inputs
const inputsNodeList = document.querySelectorAll("input");
const inputsArray = Array.prototype.slice.call(inputsNodeList);

//Selecting run button
const runButton = document.querySelector(".btn-run");


//======================= function =====================
function readCommand() {
    const commandsArray = [];
    const reWalls = /^make\('walls','(.*?)'\);$/;
    const reRoof = /^make\('roof','(.*?)'\);$/;

    let wallsColor = "";
    let roofColor = "";
    let isAlgorithmCorrect = true;

    for (let i = 0; i < 6; i++) {
        commandsArray.push(inputsArray[i].value.trim());
    }
    //=================checkingForCorrectnessOfLines=================
    if (commandsArray[0] !== "make('base');") {
        isAlgorithmCorrect = false;
        inputsArray[0].classList.remove("correct-command");
        inputsArray[0].classList.add("wrong-command");
    } else {
        inputsArray[0].classList.remove("wrong-command");
        inputsArray[0].classList.add("correct-command");
    }
    if (reWalls.test(commandsArray[1])) {
        const foundColor = commandsArray[1].match(reWalls);
        if (foundColor[1] === "red"
            || foundColor[1] === "green"
            || foundColor[1] === "yellow"
            || foundColor[1] === "blue"
            || foundColor[1] === "orange"
            || foundColor[1] === "brown") {
            inputsArray[1].classList.remove("wrong-command");
            inputsArray[1].classList.add("correct-command");
            wallsColor = foundColor[1];
        } else {
            isAlgorithmCorrect = false;
            inputsArray[1].classList.remove("correct-command");
            inputsArray[1].classList.add("wrong-command");
        }
    } else {
        isAlgorithmCorrect = false;
        inputsArray[1].classList.remove("correct-command");
        inputsArray[1].classList.add("wrong-command");
    }
    if (commandsArray[2] !== "make('chimney');") {
        isAlgorithmCorrect = false;
        inputsArray[2].classList.remove("correct-command");
        inputsArray[2].classList.add("wrong-command");
    } else {
        inputsArray[2].classList.remove("wrong-command");
        inputsArray[2].classList.add("correct-command");
    }
    if (reRoof.test(commandsArray[3])) {
        const foundColor = commandsArray[3].match(reRoof);
        if (foundColor[1] === "red"
            || foundColor[1] === "green"
            || foundColor[1] === "yellow"
            || foundColor[1] === "blue"
            || foundColor[1] === "orange"
            || foundColor[1] === "brown") {
            inputsArray[3].classList.remove("wrong-command");
            inputsArray[3].classList.add("correct-command");
            roofColor = foundColor[1];
        } else {
            isAlgorithmCorrect = false;
            inputsArray[3].classList.remove("correct-command");
            inputsArray[3].classList.add("wrong-command");
        }
    } else {
        isAlgorithmCorrect = false;
        inputsArray[3].classList.remove("correct-command");
        inputsArray[3].classList.add("wrong-command");
    }
    if (commandsArray[4] !== "make('window');") {
        isAlgorithmCorrect = false;
        inputsArray[4].classList.remove("correct-command");
        inputsArray[4].classList.add("wrong-command");
    } else {
        inputsArray[4].classList.remove("wrong-command");
        inputsArray[4].classList.add("correct-command");
    }
    if (commandsArray[5] !== "make('door');") {
        isAlgorithmCorrect = false;
        inputsArray[5].classList.remove("correct-command");
        inputsArray[5].classList.add("wrong-command");
    } else {
        inputsArray[5].classList.remove("wrong-command");
        inputsArray[5].classList.add("correct-command");
    }

    if (isAlgorithmCorrect) {
        styleHouse.innerHTML = ".house::before {background: "
            + wallsColor + ";border-top: 10px solid " + roofColor + ";border-left: 10px solid " + roofColor + ";}";
        walls.style.backgroundColor = wallsColor;
        walls.style.display = "block";
    } else {
        alert("Algorithm is wrong or you have syntax error")
        console.log("Syntax error");
    }
    //===========================================================

}

runButton.addEventListener('click', readCommand);