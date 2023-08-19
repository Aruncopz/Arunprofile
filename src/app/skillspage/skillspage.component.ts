

// @Component({
//   selector: 'app-skillspage',
//   templateUrl: './skillspage.component.html',
//   styleUrls: ['./skillspage.component.css']
// })
// export class SkillspageComponent {
//   activeRow: number | null = null;

//   setActiveRow(row: number) {
//     this.activeRow = row;
//   }


// }
import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-skillspage',
  templateUrl: './skillspage.component.html',
  styleUrls: ['./skillspage.component.css']
})
export class SkillspageComponent implements OnDestroy {
  activeRow: number | null = null;
  hideContentTimer: any;

  contentData = [
    {
      title: 'UI UX Design',
      description: '"Creating digital smiles through UI/UX."',
    },
    {
      title: 'Logo Design',
      description: '"A visual handshake between brand and audience."',
    },
    {
      title: 'Front-end development',
      description: '"Building bridges between users and technology."',
    },
    {
      title: 'Web development',
      description: '"Building the web, pixel by pixel."',
    },
  ];

  setActiveRow(row: number) {
    this.clearHideContentTimer();
    this.activeRow = row;
  }

  clearHideContentTimer() {
    if (this.hideContentTimer) {
      clearTimeout(this.hideContentTimer);
    }
  }

  setHideContentTimer() {
    this.hideContentTimer = setTimeout(() => {
      this.activeRow = null;
    }, 1000); // Adjust the time (in milliseconds) as needed
  }

  ngOnDestroy() {
    this.clearHideContentTimer();
  }
}
