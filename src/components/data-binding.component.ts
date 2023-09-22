import { Component } from "../utils/decorators";
import { traverseDOM } from "../utils/traverse";

@Component({
    template: `
    <button route="/">Go to App</button>
        <button route="home">Go to Home</button>
        <button route="data-binding">Go to Data Binding</button>
        <button route="test">Test</button>
    <h1>Two-way Binding Example</h1>
    <input id="dataInput" type="text"/>
    <button id="logButton">Log Data</button>
    <ul>
        <li myFor="item in items">
            {{item}}
        </li>
        <li myFor="res in response">
            {{res.title}}
        </li>
    </ul>
  `
})

export class DataBindingComponent {
    public data: string = "";
    items: string[] = ["Deneme 1", "Deneme2", "Deneme 3"]
    response: any[] = [
        {
            "userId": 1,
            "id": 1,
            "title": "delectus aut autem",
            "completed": false
            }
    ];
    constructor() {
        this.setupBindings();
        traverseDOM(document.body, this);
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