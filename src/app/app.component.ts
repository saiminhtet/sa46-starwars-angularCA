import { Component } from '@angular/core';

import { SwUpdate } from '@angular/service-worker';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'STARWARS';

  constructor(update: SwUpdate, private router: Router, private activatedRoute: ActivatedRoute) {
    update.available.subscribe( event => {
      update.activateUpdate().then(() => document.location.reload());
    });
  }

  getToList(param: string) {
    this.router.navigate(['/' + param + '/']);
  }
  goToTop(event) { 
    window.scroll(0,0);
  }
}

