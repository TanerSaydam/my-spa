import { Component } from "../../decorators";

@Component({
    template: `
    <h1>Two-way Binding Example</h1>
    <input id="dataInput" type="text"/>
    <button id="logButton">Log Data</button>
  `
})

export class DataBindingComponent {
    public data: string = "";

    constructor() {
        this.setupBindings();
    }

    setupBindings() {
        const inputElement = document.getElementById("dataInput") as HTMLInputElement
        if (inputElement) {
            inputElement.addEventListener("input", (e) => {
                this.data = (e.target as HTMLInputElement).value;
            });
        }

        const logButton = document.getElementById("logButton") as HTMLButtonElement;
        if (logButton) {
            logButton.addEventListener("click", () => {
                this.logData();
            });
        }
    }

    logData() {
        console.log(this.data);
    }
}