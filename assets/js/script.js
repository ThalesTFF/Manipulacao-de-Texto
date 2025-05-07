//ELEMENTOS 
let textModel = document.querySelector(".text-model");
let textData = document.querySelector(".text-data");
let textColor = document.querySelector(".text-color");



class Control {
    constructor(textData, color, textModel) {
        this.textData = textData;
        this.color = color;
        this.textModel = textModel;
        this.originalText = textModel.textContent;
    }

    start() {
        this.textData.addEventListener("keyup", () => this.changeText());
        this.color.addEventListener("input", () => this.changeColor())
    }

    changeText() {
        if (this.textData.value === "") {
            this.textModel.textContent = this.originalText;
        } else {
            this.textModel.textContent = textData.value;
        }
    }

    changeColor(){
        textModel.style.color = `${this.color.value}`

        if(this.color.value == "#ffffff"){
            textModel.style.backgroundColor = "#000000";
        } else{
            textModel.style.backgroundColor = "#ffffff";
        }
    }
}

let controle = new Control(textData, textColor, textModel);
controle.start();