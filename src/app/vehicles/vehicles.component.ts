import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { StarwarsService } from '../starwars.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { NgNavigatorShareService } from 'ng-navigator-share';

import { List } from '../model/list';
import { Vehicle } from '../model/vehicle';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {
  private ngNavigatorShareService: NgNavigatorShareService;
  list: List[];
  vehicles: Vehicle[];
  loading  =  true;
  constructor(private starwarsService: StarwarsService,
    private router: Router, private activatedRoute: ActivatedRoute,
    private spinner: NgxSpinnerService,
    ngNavigatorShareService: NgNavigatorShareService) {
      this.ngNavigatorShareService = ngNavigatorShareService;
    }

  ngOnInit() {
    this.spinner.show();
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
      this.spinner.hide();
    });
  }

  goPrevious() {
    const previous_url = this.list['previous'];
    this.spinner.show();
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
              this.spinner.hide();
      });
    }
  }

  goNext() {
    const next_url = this.list['next'];
    this.spinner.show();
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
            this.spinner.hide();
      });
    }
  }


  getVehicleDetails(url: string) {
    const id = url.split('/')[5];
    this.router.navigate(['/vehicle/', id ]);
  }
}
