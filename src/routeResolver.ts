import { AppComponent } from "./components/app.component";
import { DataBindingComponent } from "./components/data-binding.component";
import { HomeComponent } from "./components/home.component";
import { TestComponent } from "./components/test.component";

export function routeResolver(path: string): any {
  if (path === "") return AppComponent;
  else if (path === "home") return HomeComponent;
  else if (path === "data-binding") return DataBindingComponent;
  else if (path === "test") return TestComponent;
  return AppComponent;
}
