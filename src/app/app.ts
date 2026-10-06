import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomePage } from './components/home-page/home-page';
import { Users } from './components/users/users';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomePage,Users],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('updates');
}
