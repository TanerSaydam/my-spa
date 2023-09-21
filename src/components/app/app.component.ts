import { Component } from "../../decorators";

@Component({
    template: `
        <h1>App Component</h1>
        <button route="home">Go to Home</button>
        <button route="data-binding">Go to Data Binding</button>
        `
})
export class AppComponent { }