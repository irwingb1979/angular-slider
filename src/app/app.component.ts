import { Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SliderComponent } from './slider/slider.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SliderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {}
