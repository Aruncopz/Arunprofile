import { Component,ViewChild,ElementRef } from '@angular/core';
import { Router } from '@angular/router';

 interface Card {
  imageUrl: string;
  title: string;
  subtitle: string;
  linkUrl: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
})

export class HomeComponent {

  constructor(private router: Router) {}

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  designProjects : Card[] =  [
    {
      imageUrl: './assets/pet-delish.svg',
      title: 'Pet product design',
      subtitle: 'UI UX design',
      linkUrl: 'https://www.behance.net/gallery/177974217/Pet-food-online-selling-website'
    },
    {
      imageUrl: './assets/ITcorp.svg',
      title: 'IT Solution design',
      subtitle: 'UI UX design',
      linkUrl: 'https://www.behance.net/gallery/178003931/IT-Solution-website'
    },
    {
      imageUrl: './assets/paulkaadu.svg',
      title: 'E-commerce web design',
      subtitle: 'Case study',
      linkUrl: 'https://www.behance.net/gallery/165601725/UI-UX-Case-study-(Online-spices-selling-website)'
    },
    {
      imageUrl: './assets/carservice.svg',
      title: 'car service web design',
      subtitle: 'UI UX design',
      linkUrl: 'https://www.behance.net/gallery/168078399/Car-service-booking-website'
    },
    {
      imageUrl: './assets/washly.svg',
      title: 'Laundry app design',
      subtitle: 'UI UX design',
      linkUrl: 'https://www.behance.net/gallery/168078801/Laundry-booking-mobile-application'
    },
    {
      imageUrl: './assets/portfolio.svg',
      title: 'Portfolio web design',
      subtitle: 'UI UX design',
      linkUrl: 'https://www.behance.net/gallery/177978911/Portfolio-website'
    },
    {
      imageUrl: './assets/interior-design.svg',
      title: 'Interior design',
      subtitle: 'UI UX design',
      linkUrl: 'https://www.behance.net/gallery/168080143/Interior-design-company-website'
    },
    {
      imageUrl: './assets/network.svg',
      title: 'Connecting people',
      subtitle: 'Website development',
      linkUrl: '/https://www.behance.net/gallery/165601725/UI-UX-Case-study-(Online-spices-selling-website)'
    },
    
  ];


 
  ngOnInit(): void {
  }

}
