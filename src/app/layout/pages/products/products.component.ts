import { Component } from '@angular/core';
import { CardContainerService } from 'src/app/shared/services/card-container/card-container.service';
import { Card } from '../../Interface/Card/card.interface';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/shared/components/dialog/dialog.component';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  cards: Card[] = [];
  // imageTitle!: string;
  // imageUrl!: string;
  // imageDescription!: string;
  constructor(
    private cardService: CardContainerService,
    public dialog: MatDialog
  ) {}
  ngOnInit() {
    this.cards = this.cardService.getCards();
  }
  openDialog(item: Card) {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {
        imageTitle: item.name,
        imageUrl: item.photoUrl,
        imageDescription: item.description,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
