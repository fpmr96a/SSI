import { Component, OnInit} from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'SSI';
  navLinks: any[];
  activeLinkIndex = -1;

  constructor(private router: Router) {
    this.navLinks = [
        {
            label: 'About Us',
            link: './aboutUs',
            index: 0
        }, {
            label: 'Architecture',
            link: './architecture',
            index: 1
        }, {
          label: 'Technology',
          link: './technology',
          index: 1
        }, {
            label: 'Portfolio',
            link: './portfolio',
            index: 1
         }, 
    ];
}
ngOnInit(): void {
  this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
  });
}
}
