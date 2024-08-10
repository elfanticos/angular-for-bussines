import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MyCheckboxComponent} from "./my-checkbox/my-checkbox.component";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MyCheckboxComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'checkbox-standalone';
  isChecked= true;
  text= "checkbox con texto cambiado";
  isDisabled = true;
}
