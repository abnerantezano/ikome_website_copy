import { Component } from '@angular/core';

@Component({
  selector: 'app-navmenu',
  templateUrl: './navmenu.component.html',
  styleUrl: './navmenu.component.css'
})
export class NavmenuComponent {
  activeSection: string = 'home';

  setActive(section: string) {
    this.activeSection = section;
  }
}
