import { TestBed, waitForAsync } from '@angular/core/testing';
import { of } from 'rxjs';
import { SwUpdate } from '@angular/service-worker';
import { RouterTestingModule } from '@angular/router/testing';
import { NgxSpinnerModule } from 'ngx-spinner';
import { MaterialModule } from './material/material.module';
import { AppComponent } from './app.component';
describe('AppComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [RouterTestingModule, NgxSpinnerModule, MaterialModule],
      providers: [
        { provide: SwUpdate, useValue: { versionUpdates: of({ type: 'NO_NEW_VERSION' }), activateUpdate: () => Promise.resolve() } }
      ],
    }).compileComponents();
  }));
  it('should create the app', waitForAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'STARWARS'`, waitForAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('STARWARS');
  }));
  it('should render title in the header span', waitForAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('span.jedi-font').textContent).toContain('STARWARS');
  }));
});
