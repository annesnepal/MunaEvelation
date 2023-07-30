import { Injectable } from '@angular/core';
import { Card } from '../../../layout/Interface/Card/card.interface';
@Injectable({
  providedIn: 'root',
})
export class CardContainerService {
  constructor() {}

  getCards(): Card[] {
    return [
      {
        photoUrl: '../../../../assets/images/card-images/image1.jpg',
        name: 'Heading1',
        description: 'This is card one',
      },
      {
        photoUrl: '../../../../assets/images/card-images/image2.jpg',
        name: 'Heading2',
        description: 'This is card two',
      },
      {
        photoUrl: '../../../../assets/images/card-images/image3.jpg',
        name: 'Heading3',
        description: 'This is card three',
      },
      {
        photoUrl: '../../../../assets/images/card-images/image1.jpg',
        name: 'Heading4',
        description: 'This is card four',
      },
      {
        photoUrl: '../../../../assets/images/card-images/image2.jpg',
        name: 'Heading5',
        description: 'This is card five',
      },
      {
        photoUrl: '../../../../assets/images/card-images/image3.jpg',
        name: 'Heading6',
        description: 'This is card six',
      },
      {
        photoUrl: '../../../../assets/images/card-images/image1.jpg',
        name: 'Heading7',
        description: 'This is card seven',
      },
      {
        photoUrl: '../../../../assets/images/card-images/image2.jpg',
        name: 'Heading8',
        description: 'This is card eight',
      },
      {
        photoUrl: '../../../../assets/images/card-images/image3.jpg',
        name: 'Heading9',
        description: 'This is card nine',
      },
    ];
  }
}
