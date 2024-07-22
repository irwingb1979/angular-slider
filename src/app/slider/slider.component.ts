import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent {
  number = 1;
  color = 'red';
  animation = true;
  constructor() {
    // Executable code inside the constructor
    console.log('Constructor - animation:', this.animation);
    this.triggerAnimation();
  }
  
  slide1 = 'Lorem ipsum dolor sit amet';
  slide2 = 'Duis tempus lacus dictum eros rhoncus';
  slide3 = 'Sed ut dolor in justo imperdie';

  textSlide = this.slide1;

  left() {
    this.number--;
    if (this.number < 1) {
      this.number = 3;
    }
    this.updateSlide();
    this.triggerAnimation();
  }

  right() {
    this.number++;
    if (this.number > 3) {
      this.number = 1;
    }

    this.updateSlide();
    this.triggerAnimation();
  }

  updateSlide() {
    if (this.number === 1) {
      this.textSlide = this.slide1;
      this.color = 'red';
      
    } else if (this.number === 2) {
      this.textSlide = this.slide2;
      this.color = 'green';
    } else if (this.number === 3) {
      this.textSlide = this.slide3;
      this.color = 'blue';
    }
  }
  triggerAnimation(){
    this.animation = true;
    setTimeout(() => {
      this.animation = false; 
      console.log("hello from trigger");
    }, 1000);
  }

}
