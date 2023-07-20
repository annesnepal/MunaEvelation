import { Injectable } from '@angular/core';
import { Card } from '../../../layout/Interface/Card/card.interface';
@Injectable({
  providedIn: 'root',
})
export class CardContainerService {
  constructor() {}

  cards: Card[] = [
    {
      photoUrl: '',
      name: '',
      description: '',
    },
    {
      photoUrl: '',
      name: '',
      description: '',
    },
    {
      photoUrl: '',
      name: '',
      description: '',
    },
    {
      photoUrl: '',
      name: '',
      description: '',
    },
    {
      photoUrl: '',
      name: '',
      description: '',
    },
    {
      photoUrl: '',
      name: '',
      description: '',
    },
    {
      photoUrl: '',
      name: '',
      description: '',
    },
    {
      photoUrl: '',
      name: '',
      description: '',
    },
  ];
}
