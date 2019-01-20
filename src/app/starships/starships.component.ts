import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { StarwarsService } from '../starwars.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { NgNavigatorShareService } from 'ng-navigator-share';

import { List } from '../model/list';
import { Starship } from '../model/starship';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css']
})
export class StarshipsComponent implements OnInit {
  private ngNavigatorShareService: NgNavigatorShareService;
  list: List[];
  starships: Starship[];
  loading  =  true;
  constructor(private starwarsService: StarwarsService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private spinner: NgxSpinnerService,
    ngNavigatorShareService: NgNavigatorShareService) {
      this.ngNavigatorShareService = ngNavigatorShareService;
     }


  ngOnInit() {
    this.spinner.show();
    this.getStarships();
  }

  getStarships(): void {
    this.starwarsService.getStarships()
    .subscribe(result => {
      this.list = result;
      this.starships = this.list['results'];

      // tslint:disable-next-line:forin
      for (const s in this.starships) {
        const id = this.starships[s].url.split('/')[5];
        this.starships[s].img_url = './assets/images/starships/' + id + '.jpg';
      }

      this.spinner.hide();
    });
  }

  goPrevious() {
    const previous_url = this.list['previous'];
    this.spinner.show();
      if (previous_url != null) {
        this.starwarsService.getStarshipsfromURL(previous_url)
        .subscribe(result => {
            this.list = result;
            this.starships = this.list['results'];
              // tslint:disable-next-line:forin
              for (const s in this.starships) {
                const id = this.starships[s].url.split('/')[5];
                this.starships[s].img_url = './assets/images/starships/' + id + '.jpg';
              }
              this.spinner.hide();
      });
    }
  }

  goNext() {
    const next_url = this.list['next'];
    this.spinner.show();
      if (next_url != null) {
        this.starwarsService.getFilmsfromURL(next_url)
        .subscribe(result => {
            this.list = result;
            this.starships = this.list['results'];
              // tslint:disable-next-line:forin
              for (const s in this.starships) {
                const id = this.starships[s].url.split('/')[5];
                this.starships[s].img_url = './assets/images/starships/' + id + '.jpg';
              }
              this.spinner.hide();
      });
    }
  }

  getStarshipDetails(url: string) {
    const id = url.split('/')[5];
    this.router.navigate(['/starship/', id ]);
  }
}
