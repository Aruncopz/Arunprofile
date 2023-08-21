import { Component,ElementRef,HostListener,Input, OnInit, Renderer2, ViewChild  } from '@angular/core';


export interface Card {
  imageUrl: string;
  title: string;
  subtitle: string;
  linkUrl: string; 
}

@Component({
  selector: 'app-showproject',
  templateUrl: './showproject.component.html',
  styleUrls: ['./showproject.component.css'],

 

})
export class ShowprojectComponent {
  
 


  viewportWidth: number;

  constructor(private renderer: Renderer2, private el: ElementRef) {
    this.viewportWidth = window.innerWidth; // Initialize with current viewport width
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.viewportWidth = window.innerWidth;
    this.updateVariablesBasedOnViewport(); // Call a function to update other variables
  }
  

  updateVariablesBasedOnViewport(): void {
    if (this.viewportWidth <= 767) {
      this.visibleCardsCount = 2; // For small screens, show 2 cards
    } else if (this.viewportWidth <= 1024) {
      this.visibleCardsCount = 3; // For medium screens, show 3 cards
    } else {
      this.visibleCardsCount = 3; // For large screens, also show 3 cards
    }

    this.updateVisibleCards();
  }

  visibleCardsCount: number = 3;


  @Input()
  sectionTitle!: string;
  @Input() cards: Card[] = [];

  visibleCards: Card[] = [];
  currentIndex = 0;

 

  ngOnInit(): void {
    const storedIndex = localStorage.getItem('currentCardIndex');
    if (storedIndex) {
      this.currentIndex = parseInt(storedIndex, 10);
    }
    this.updateVisibleCards();
  }

  moveLeft(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      localStorage.setItem('currentCardIndex', this.currentIndex.toString());
      this.updateVisibleCards();
    }
  }
  
  moveRight(): void {
    if (this.currentIndex < this.cards.length - 3) {
      this.currentIndex++;
      localStorage.setItem('currentCardIndex', this.currentIndex.toString());
      this.updateVisibleCards();
    }
  }

 

  updateVisibleCards(): void {
    this.visibleCards = this.cards.slice(this.currentIndex, this.currentIndex + this.visibleCardsCount);
  }

  

}

 // ngOnInit(): void {
  //   this.updateVisibleCards();
  // }


 // moveLeft(): void {
  //   if (this.currentIndex > 0) {
  //     this.currentIndex--;
  //     this.updateVisibleCards();
  //   }
  // }

  // moveRight(): void {
  //   if (this.currentIndex < this.cards.length - 3) {
  //     this.currentIndex++;
  //     this.updateVisibleCards();
  //   }
  // }