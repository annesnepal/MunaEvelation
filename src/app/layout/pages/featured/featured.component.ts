import { Component } from '@angular/core';
import { Card } from '../../Interface/Card/card.interface';
import { CardContainerService } from 'src/app/shared/services/card-container/card-container.service';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css'],
})
export class FeaturedComponent {
  cards: Card[] = [];
  constructor(private cardService: CardContainerService) {}

  ngOnInit() {
    this.cards = this.cardService.getCards();
  }
}
