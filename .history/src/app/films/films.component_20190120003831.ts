import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { StarwarsService } from '../starwars.service';
import { NgNavigatorShareService } from 'ng-navigator-share';

import { List } from '../model/list';
import { Film } from '../model/film';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  private ngNavigatorShareService: NgNavigatorShareService;

  list: List[];
  films: Film[];
  loading  =  true;
  constructor(private starwarsService: StarwarsService,
    private router: Router, private activatedRoute: ActivatedRoute, ngNavigatorShareService: NgNavigatorShareService) {
      this.ngNavigatorShareService = ngNavigatorShareService;
    }

  ngOnInit() {
    this.getFilms();
  }

  getFilms(): void {
    this.starwarsService.getFilms()
    .subscribe(result => {
      this.list = result;
      this.films = this.list['results'];

      // tslint:disable-next-line:forin
      for (const film in this.films) {
        const film_id = this.films[film].url.split('/')[5];
        this.films[film].img_url = './assets/images/films/' + film_id + '.jpg';
      }

      this.loading  =  false;
    });
  }

  goPrevious() {
    const previous_url = this.list['previous'];
      if (previous_url != null) {
        this.starwarsService.getFilmsfromURL(previous_url)
        .subscribe(result => {
            this.list = result;
            this.films = this.list['results'];
              // tslint:disable-next-line:forin
              for (const film in this.films) {
                const film_id = this.films[film].url.split('/')[5];
                this.films[film].img_url = './assets/images/films/' + film_id + '.jpg';
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
            this.films = this.list['results'];
              // tslint:disable-next-line:forin
              for (const film in this.films) {
                const film_id = this.films[film].url.split('/')[5];
                this.films[film].img_url = './assets/images/films/' + film_id + '.jpg';
              }
      });
    }
  }


  getFilmDetails(url: string) {
    const id = url.split('/')[5];
    this.router.navigate(['/film/', id ]);
  }

  async shareApi() {
    try {
      const sharedResponse = await this.ngNavigatorShareService.share({
        title: '`Web Articles and Tutorials',
        text: 'Check out my blog — its worth looking.',
        url: 'www.codershood.info'
      });
      console.log(sharedResponse);
    } catch ( error) {
      console.log('You app is not shared, reason: ', error);
    }
  }
}
