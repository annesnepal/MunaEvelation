import { Component, Input, OnInit } from '@angular/core';
import { carouselImage } from '../../Interface/Carousel/carousel.interface';
import { CarouselImagesService } from 'src/app/services/carousel-images.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  @Input() images: carouselImage[] = [];
  @Input() indicators = true;
  @Input() controls = true;
  @Input() autoSlide = true;
  @Input() slideInterval = 4000;

  selectedIndex = 0;
  constructor(private carouselImage: CarouselImagesService) {}
  ngOnInit() {
    this.images = this.carouselImage.getImages();
    if (this.autoSlide) {
      this.autoSlideImages();
    }
  }
  autoSlideImages() {
    setInterval(() => {
      this.onNextClick();
    }, this.slideInterval);
  }

  // Set index of image on dot/indicator  click
  selectImage(index: number) {
    this.selectedIndex = index;
  }
  onPrevClick() {
    if (this.selectedIndex === 0) {
      this.selectedIndex = this.images.length - 1;
    } else {
      this.selectedIndex--;
    }
  }
  onNextClick() {
    if (this.selectedIndex === this.images.length - 1) {
      this.selectedIndex = 0;
    } else {
      this.selectedIndex++;
    }
  }
}
