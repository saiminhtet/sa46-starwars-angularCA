import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { StarwarsService } from '../starwars.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { NgNavigatorShareService } from 'ng-navigator-share';

import { People } from '../model/people';
import { List } from '../model/list';

@Component({
  selector: 'app-peoples',
  templateUrl: './peoples.component.html',
  styleUrls: ['./peoples.component.css']
})
export class PeoplesComponent implements OnInit {
  private ngNavigatorShareService: NgNavigatorShareService;
  peoples: People[];
  list: List[];
  loading  =  true;
  constructor(private starwarsService: StarwarsService,
  private router: Router, private activatedRoute: ActivatedRoute,
  private spinner: NgxSpinnerService,
          ngNavigatorShareService: NgNavigatorShareService) {
            this.ngNavigatorShareService = ngNavigatorShareService;
           }

  ngOnInit() {
    this.spinner.show();
    this.getPeoples();
  }

  getPeoples(): void {
    this.starwarsService.getPeoples()
    .subscribe(result => {
          console.log('list', result);
             this.list = result;
            this.peoples = this.list['results'];
              // tslint:disable-next-line:forin
              for (const people in this.peoples) {
                const people_id = this.peoples[people].url.split('/')[5];
                console.log('people', this.peoples[people].name);
                console.log('id', people_id);
                this.peoples[people].img_url = './assets/images/people/' + people_id + '.jpg';
              }
              this.loading  =  false;
              console.log('peoples', this.peoples);
              this.spinner.hide();
      });
  }

  // getPeoples(): void {
  //   this.starwarsService.getPeoples()
  //   .subscribe(peoples => {this.peoples = peoples['results'];
  //           console.log('peoples', this.peoples);
  //             // tslint:disable-next-line:forin
  //             for (const people in this.peoples) {
  //               const people_id = this.peoples[people].url.split('/')[5];
  //               console.log('people', this.peoples[people].name);
  //               console.log('id', people_id);
  //               this.peoples[people].img_url = './assets/images/people/' + people_id + '.jpg';
  //             }
  //             console.log('peoples', this.peoples);
  //     });
  // }

  goPrevious() {
    const previous_url = this.list['previous'];
    this.spinner.show();
    console.log(previous_url);
      if (previous_url != null) {
        this.starwarsService.getPeoplesfromURL(previous_url)
        .subscribe(result => {
          console.log('list', result);
            this.list = result;
            this.peoples = this.list['results'];
              // tslint:disable-next-line:forin
              for (const people in this.peoples) {
                const people_id = this.peoples[people].url.split('/')[5];
                console.log('people', this.peoples[people].name);
                console.log('id', people_id);
                this.peoples[people].img_url = './assets/images/people/' + people_id + '.jpg';
              }
              console.log('peoples', this.peoples);
              this.spinner.hide();
      });
    }
  }

  goNext() {
    const next_url = this.list['next'];
    this.spinner.show();
    console.log(next_url);
      if (next_url != null) {
        this.starwarsService.getPeoplesfromURL(next_url)
        .subscribe(result => {
          console.log('list', result);
            this.list = result;
            this.peoples = this.list['results'];
              // tslint:disable-next-line:forin
              for (const people in this.peoples) {
                const people_id = this.peoples[people].url.split('/')[5];
                console.log('people', this.peoples[people].name);
                console.log('id', people_id);
                this.peoples[people].img_url = './assets/images/people/' + people_id + '.jpg';
              }
              console.log('peoples', this.peoples);
              this.spinner.hide();
      });
    }
  }
  /* getPeoples(): void {
    this.starwarsService.getPeoples()
     .then(peoples => this.peoples = peoples['results'])
   }*/

  getPeopleDetails(url: string) {
    const id = url.split('/')[5];
    this.router.navigate(['/people/', id ]);
  }

}
