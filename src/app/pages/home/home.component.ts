import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgStyle, ProductCardComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  images = ['../../../assets/farm.jpg', '../../../assets/farm2.jpg'];
  currentImageIndex = 0;
  currentImage = this.images[this.currentImageIndex];
  currentOpacity = 1;

  ngOnInit(): void {
    setInterval(() => {
      this.changeBackgroundImage();
    }, 3000); 
  }

  changeBackgroundImage(): void {
    this.currentOpacity = 0;
    setTimeout(() => {
      this.currentImageIndex =
        (this.currentImageIndex + 1) % this.images.length;
      this.currentImage = this.images[this.currentImageIndex];
      this.currentOpacity = 1;
    }, 1000); 
  }
}
