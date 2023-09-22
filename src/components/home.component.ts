import { Component } from "../utils/decorators";
import { traverseDOM } from "../utils/traverse";

@Component({
    templateUrl: './home.component.html'
})
export class HomeComponent { 
    todos: string[] = ["Deneme1","deneme2","deneme3"]
    constructor(){
        traverseDOM(document.body, this);
    }
}