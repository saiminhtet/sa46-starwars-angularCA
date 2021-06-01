import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { StarwarsService } from '../starwars.service';
import { NgxSpinnerService } from 'ngx-spinner';

import { List } from '../model/list';
import { Species } from '../model/species';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.css']
})
export class SpeciesComponent implements OnInit {
  
  list: List[];
  species: Species[];
  loading  =  true;
  constructor(private starwarsService: StarwarsService,
    private router: Router, private activatedRoute: ActivatedRoute,
    private spinner: NgxSpinnerService) {}

  ngOnInit() {
    this.spinner.show();
    this.getSpecies();
  }

  getSpecies(): void {
    this.starwarsService.getSpecies()
    .subscribe(result => {
      this.list = result;
      this.species = this.list['results'];

      // tslint:disable-next-line:forin
      for (const s in this.species) {
        const id = this.species[s].url.split('/')[5];
        this.species[s].img_url = './assets/images/species/' + id + '.jpg';
      }

      this.spinner.hide();
    });
  }

  goPrevious() {
    const previous_url = this.list['previous'];
    this.spinner.show();
      if (previous_url != null) {
        this.starwarsService.getSpeciesfromURL(previous_url)
        .subscribe(result => {
            this.list = result;
            this.species = this.list['results'];
              // tslint:disable-next-line:forin
              for (const s in this.species) {
                const id = this.species[s].url.split('/')[5];
                this.species[s].img_url = './assets/images/species/' + id + '.jpg';
              }
              this.spinner.hide();
      });
    }
  }

  goNext() {
    const next_url = this.list['next'];
    this.spinner.show();
      if (next_url != null) {
        this.starwarsService.getSpeciesfromURL(next_url)
        .subscribe(result => {
            this.list = result;
            this.species = this.list['results'];
              // tslint:disable-next-line:forin
              for (const s in this.species) {
                const id = this.species[s].url.split('/')[5];
                this.species[s].img_url = './assets/images/species/' + id + '.jpg';
              }
              this.spinner.hide();
      });
    }
  }

  getSpeciesDetails(url: string) {
    const id = url.split('/')[5];
    this.router.navigate(['/species/', id ]);
  }
}
