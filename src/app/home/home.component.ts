import { Component,ViewChild,ElementRef } from '@angular/core';
interface Project {
  imageUrl: string;
  title: string;
  subtitle: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
})

export class HomeComponent {
  projects: Project[] = [
    {
      imageUrl: '/assets/behance.svg',
      title: 'Intirior Design',
      subtitle: 'UI UX Design'
    },
    {
      imageUrl: './assets/pet-delish.svg',
      title: 'Intirior Design',
      subtitle:  'UI UX Design'
    },
    {
      imageUrl: './assets/pet-delish.svg',
      title: 'Intirior Design',
      subtitle:  'UI UX Design'
    },
    {
      imageUrl: './assets/pet-delish.svg',
      title: 'Intirior Design',
      subtitle:  'Design'
    },
  ];
  visibleProjects: Project[] = [];

  currentIndex = 0;
  itemsPerPage = 3;

  constructor() {
    this.updateVisibleProjects();
  }

  scrollLeft() {
    this.currentIndex = Math.max(this.currentIndex - 1, 0);
    this.updateVisibleProjects();
  }

  scrollRight() {
    this.currentIndex = Math.min(this.currentIndex + 1, this.projects.length - this.itemsPerPage);
    this.updateVisibleProjects();
  }

  updateVisibleProjects() {
    this.visibleProjects = this.projects.slice(this.currentIndex, this.currentIndex + this.itemsPerPage);
  }

}
