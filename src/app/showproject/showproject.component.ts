import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

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
export class ShowprojectComponent implements OnInit {
  @ViewChild('container') container!: ElementRef;
  @Input() sectionTitle!: string;
  @Input() cards: Card[] = [];
  
  scrollAmount = 300;
  progressPercentage: number = 0;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    setTimeout(() => this.updateProgress(), 0);
  }

  moveLeft(): void {
    const container = this.container.nativeElement;
    container.scrollLeft -= this.scrollAmount;
    this.updateProgress();
  }

  moveRight(): void {
    const container = this.container.nativeElement;
    container.scrollLeft += this.scrollAmount;
    this.updateProgress();
  }

  onScroll(): void {
    this.updateProgress();
  }

  updateProgress(): void {
    const container = this.container?.nativeElement;
    if (container) {
      const maxScroll = container.scrollWidth - container.clientWidth;
      const currentScroll = container.scrollLeft;
      this.progressPercentage = maxScroll > 0 
        ? (currentScroll / maxScroll) * 100
        : 100;
    }
  }
}