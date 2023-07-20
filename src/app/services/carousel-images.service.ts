import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CarouselImagesService {
  constructor() {}

  images = [
    {
      imageSrc: './assets/images/carousel/image1.jpg',
      imageAlt: 'image-1',
    },
    {
      imageSrc: './assets/images/carousel/image2.jpg',
      imageAlt: 'image-1',
    },
    {
      imageSrc: './assets/images/carousel/image3.jpg',
      imageAlt: 'image-1',
    },
  ];

  getImages() {
    return this.images;
  }
}
