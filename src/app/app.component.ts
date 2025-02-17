import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DisplayTableComponent } from "./display-table/display-table.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DisplayTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'data-table';
}
