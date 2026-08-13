import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { StarwarsService } from '../starwars.service';
import { NgxSpinnerService } from 'ngx-spinner';

import { IndexComponent } from './index.component';

describe('IndexComponent', () => {
  let component: IndexComponent;
  let fixture: ComponentFixture<IndexComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        { provide: ActivatedRoute, useValue: { snapshot: { paramMap: { get: () => '1' }, params: { id: '1' } } } },
        { provide: Location, useValue: { back: () => {} } },
        { provide: StarwarsService, useValue: {
            getPeoples: () => of([]), getFilms: () => of([]), getSpecies: () => of([]),
            getStarships: () => of([]), getVehicles: () => of([]), getPlanets: () => of([]),
            getPeoplebyId: () => of({}), getFilmbyId: () => of({}), getSpeciesbyId: () => of({}),
            getStarshipbyId: () => of({}), getVehiclebyId: () => of({}), getPlanetbyId: () => of({}),
            getPeopleDescription: () => [], getPlanetDescription: () => of({}), getFilmsDescription: () => of({})
        } },
        { provide: NgxSpinnerService, useValue: { show: () => {}, hide: () => {} } }
      ],
      declarations: [ IndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
