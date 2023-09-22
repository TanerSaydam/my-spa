import { Component } from "../utils/decorators";
import { traverseDOM } from "../utils/traverse";

@Component({
    template: `
        <h1>App Component</h1>
        <button route="/">Go to App</button>
        <button route="home">Go to Home</button>
        <button route="data-binding">Go to Data Binding</button>
        <button route="test">Test</button>
        <ul id="myList">
            <li myFor="item in items">
                {{item}}
            </li>
        </ul>
        <p>asdasdasd</p>
        <p myFor="item in items">
            {{item}}
        </p>
        <p> saasdasdasd</p>
        `
})
export class AppComponent {
    items: string[] = ["Deneme 1", "Deneme2", "Deneme 3"]
    constructor() {
        traverseDOM(document.body, this);
    }
}