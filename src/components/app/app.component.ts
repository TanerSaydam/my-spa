import { Component } from "../../decorators";
import { traverseDOM } from "../../utils/traverse";

@Component({
    template: `
        <h1>App Component</h1>
        <button route="home">Go to Home</button>
        <button route="data-binding">Go to Data Binding</button>
        <button route="test">Test</button>
        <div myForContainer>
        <ul id="myList">
            <li myFor="item in items">
                {{item}}
            </li>
        </ul>
        </div>
        <p>asdasdasd</p>
        <div myForContainer>
        <p myFor="item in items">
            {{item}}
        </p>
        </div>
        <p> saasdasdasd</p>
        `
})
export class AppComponent {
    items: string[] = ["Deneme 1", "Deneme2", "Deneme 3"]
    constructor() {
        traverseDOM(document.body, this);
    }
}