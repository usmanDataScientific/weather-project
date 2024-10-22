import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavberComponent } from './components/navber/navber.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavberComponent, DashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'weather-project';
}
