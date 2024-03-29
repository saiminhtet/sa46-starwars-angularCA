import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { StarwarsService } from '../starwars.service';
import { NgxSpinnerService } from 'ngx-spinner';


import { List } from '../model/list';
import { Planet } from '../model/planet';
@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {  
  list: List[];
  planets: Planet[];
  loading  =  true;
  constructor(private starwarsService: StarwarsService,
    private router: Router, private activatedRoute: ActivatedRoute,
    private spinner: NgxSpinnerService) { }


  ngOnInit() {
    this.spinner.show();
    this.getPlanets();
  }

  getPlanets(): void {
    this.starwarsService.getPlanets()
    .subscribe(result => {
      this.list = result;
      this.planets = this.list['results'];

      // tslint:disable-next-line:forin
      for (const p in this.planets) {
        const id = this.planets[p].url.split('/')[5];
        this.planets[p].img_url = './assets/images/planets/' + id + '.jpg';
      }

      this.spinner.hide();
    });
  }

  goPrevious() {
    const previous_url = this.list['previous'];
    this.spinner.show();
      if (previous_url != null) {
        this.starwarsService.getPlanetsfromURL(previous_url)
        .subscribe(result => {
            this.list = result;
            this.planets = this.list['results'];

            // tslint:disable-next-line:forin
            for (const p in this.planets) {
              const id = this.planets[p].url.split('/')[5];
              this.planets[p].img_url = './assets/images/planets/' + id + '.jpg';
            }
            this.spinner.hide();
        });
    }
  }

  goNext() {
    const next_url = this.list['next'];
    this.spinner.show();
      if (next_url != null) {
        this.starwarsService.getPlanetsfromURL(next_url)
        .subscribe(result => {
            this.list = result;
            this.planets = this.list['results'];

            // tslint:disable-next-line:forin
            for (const p in this.planets) {
              const id = this.planets[p].url.split('/')[5];
              this.planets[p].img_url = './assets/images/planets/' + id + '.jpg';
            }
            this.spinner.hide();
        });
    }
  }

  getPlanetDetails(url: string) {
    const id = url.split('/')[5];
    this.router.navigate(['/planet/', id ]);
  }

}
