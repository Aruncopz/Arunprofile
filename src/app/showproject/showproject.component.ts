import { Component,Input, OnInit  } from '@angular/core';

interface Card {
  imageUrl: string;
  title: string;
  subtitle: string;
}

@Component({
  selector: 'app-showproject',
  templateUrl: './showproject.component.html',
  styleUrls: ['./showproject.component.css']
})
export class ShowprojectComponent {
  // @Input()
  // sectionClass!: string;

  @Input()
  sectionTitle!: string;
  @Input() cards: Card[] = [];

  visibleCards: Card[] = [];
  currentIndex = 0;

  ngOnInit(): void {
    this.updateVisibleCards();
  }

  moveLeft(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.updateVisibleCards();
    }
  }

  moveRight(): void {
    if (this.currentIndex < this.cards.length - 3) {
      this.currentIndex++;
      this.updateVisibleCards();
    }
  }

  updateVisibleCards(): void {
    this.visibleCards = this.cards.slice(this.currentIndex, this.currentIndex + 3);
  }


}

