import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { StarwarsService } from '../starwars.service';

import { List } from '../model/list';
import { Starship } from '../model/starship';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css']
})
export class StarshipsComponent implements OnInit {

  list: List[];
  starships: Starship[];
  loading  =  true;
  constructor(private starwarsService: StarwarsService,
    private router: Router, private activatedRoute: ActivatedRoute) { }


  ngOnInit() {
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

      this.loading  =  false;
    });
  }

  goPrevious() {
    const previous_url = this.list['previous'];
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
      });
    }
  }

  goNext() {
    const next_url = this.list['next'];
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
      });
    }
  }

  getStarshipDetails(url: string) {
    const id = url.split('/')[5];
    this.router.navigate(['/starship/', id ]);
  }
}
