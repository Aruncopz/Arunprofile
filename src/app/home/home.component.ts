import { Component,ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
})

export class HomeComponent {

  designProjects = [
    {
      imageUrl: './assets/pet-delish.svg',
      title: 'Pet product design',
      subtitle: 'UI UX design'
    },
    {
      imageUrl: './assets/washly.svg',
      title: 'Laundry app design',
      subtitle: 'UI UX design'
    },
    {
      imageUrl: './assets/portfolio.svg',
      title: 'Portfolio web design',
      subtitle: 'UI UX design'
    },
    {
      imageUrl: './assets/pet-delish.svg',
      title: 'Interior design',
      subtitle: 'UI UX design'
    },
    {
      imageUrl: './assets/arun.svg',
      title: 'Interior design',
      subtitle: 'UI UX design'
    },
    
  ];

  frontendProjects = [
    {
      imageUrl: './assets/pet-delish.svg',
      title: 'Interior design',
      subtitle: 'UX design'
    },
    {
      imageUrl: './assets/washly.svg',
      title: 'Interior design',
      subtitle: 'UI UX design'
    },
    {
      imageUrl: './assets/arun.svg',
      title: 'Interior design',
      subtitle: 'UI UX design'
    },
    {
      imageUrl: './assets/pet-delish.svg',
      title: 'Interior design',
      subtitle: 'UI UX design'
    },
    {
      imageUrl: './assets/arun.svg',
      title: 'Interior design',
      subtitle: 'UI UX design'
    },
  ];

  // sections = [
  //   {
  //     title: 'Design Projects',
  //     cards: [
  //       {
  //         imageUrl: './assets/pet-delish.svg',
  //         title: 'Pet product design',
  //         subtitle: 'UI UX design'
  //       },
  //       {
  //         imageUrl: './assets/washly.svg',
  //         title: 'Laundry app design',
  //         subtitle: 'UI UX design'
  //       },
  //       {
  //         imageUrl: './assets/portfolio.svg',
  //         title: 'Portfolio web design',
  //         subtitle: 'UI UX design'
  //       },
  //       {
  //         imageUrl: './assets/pet-delish.svg',
  //         title: 'Interior design',
  //         subtitle: 'UI UX design'
  //       },
  //       {
  //         imageUrl: './assets/arun.svg',
  //         title: 'Interior design',
  //         subtitle: 'UI UX design'
  //       },
  //     ],
  //     sectionClass: 'design-section' // Apply the appropriate class for styling
  //   },
  //   {
  //     title: 'Frontend Projects',
  //     cards: [
  //       {
  //         imageUrl: './assets/pet-delish.svg',
  //         title: 'Interior design',
  //         subtitle: 'UX design'
  //       },
  //       {
  //         imageUrl: './assets/washly.svg',
  //         title: 'Interior design',
  //         subtitle: 'UI UX design'
  //       },
  //       {
  //         imageUrl: './assets/arun.svg',
  //         title: 'Interior design',
  //         subtitle: 'UI UX design'
  //       },
  //       {
  //         imageUrl: './assets/pet-delish.svg',
  //         title: 'Interior design',
  //         subtitle: 'UI UX design'
  //       },
  //       {
  //         imageUrl: './assets/arun.svg',
  //         title: 'Interior design',
  //         subtitle: 'UI UX design'
  //       },
  //     ],
  //     sectionClass: 'frontend-section' // Apply the appropriate class for styling
  //   }
  //   // Add more sections if needed
  // ];

  ngOnInit(): void {
  }

}
