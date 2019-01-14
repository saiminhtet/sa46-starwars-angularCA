import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { StarwarsService } from '../starwars.service';

import { List } from '../model/list';
import { Vehicle } from '../model/vehicle';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {

  list: List[];
  vehicles: Vehicle[];
  loading  =  true;
  constructor(private starwarsService: StarwarsService,
    private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getVehicles();
  }

  getVehicles(): void {
    this.starwarsService.getVehicles()
    .subscribe(result => {
      this.list = result;
      this.vehicles = this.list['results'];

      // tslint:disable-next-line:forin
      for (const v in this.vehicles) {
        const id = this.vehicles[v].url.split('/')[5];
        this.vehicles[v].img_url = './assets/images/vehicles/' + id + '.jpg';
      }
      this.loading  =  false;
    });
  }

  goPrevious() {
    const previous_url = this.list['previous'];
      if (previous_url != null) {
        this.starwarsService.getVehiclesfromURL(previous_url)
        .subscribe(result => {
            this.list = result;
            this.vehicles = this.list['results'];
              // tslint:disable-next-line:forin
              for (const v in this.vehicles) {
                const id = this.vehicles[v].url.split('/')[5];
                this.vehicles[v].img_url = './assets/images/vehicles/' + id + '.jpg';
              }
      });
    }
  }

  goNext() {
    const next_url = this.list['next'];
      if (next_url != null) {
        this.starwarsService.getVehiclesfromURL(next_url)
        .subscribe(result => {
            this.list = result;
            this.vehicles = this.list['results'];
            // tslint:disable-next-line:forin
            for (const v in this.vehicles) {
              const id = this.vehicles[v].url.split('/')[5];
              this.vehicles[v].img_url = './assets/images/vehicles/' + id + '.jpg';
            }
      });
    }
  }


  getVehicleDetails(url: string) {
    const id = url.split('/')[5];
    this.router.navigate(['/vehicle/', id ]);
  }
}
