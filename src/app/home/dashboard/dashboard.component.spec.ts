import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
      imports: [HttpClientModule, FormsModule]
        })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

// import { WeatherService } from './../../shared/services/weather.service';
// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { DashboardComponent } from './dashboard.component';
// import { FormsModule } from '@angular/forms';
// import { Observable} from 'rxjs'
// import { IForecast } from 'src/app/shared/interfaces/IForecast';
// import { IWeatherReport } from 'src/app/shared/interfaces/IWeatherReport';
// import { empty } from 'rxjs';
 
// class MockUser {
 
//   public me(): any {
//     return null;
//   }
// }
// describe('DashboardComponent', () => {
//   let component: DashboardComponent;
//   let fixture: ComponentFixture<DashboardComponent>;
//   let weatherService: WeatherService;
//   let weatherServiceStub: Partial<WeatherService>;

//   beforeEach(async () => {

//     // weatherServiceStub = {

//     //   getCurrentWeather('koblenz', 'Kelvin'): Observable<IWeatherReport> {
//     //     return Observable.empty();
//     //   },
    
//     //   getForecast('koblenz', 'Kelvin'): Observable<IForecast> {
//     //     return Observable.empty();
//     //   }
//     // }
//     await TestBed.configureTestingModule({
//       imports: [FormsModule],
//       declarations: [ DashboardComponent ],
//       providers: [ { provide: weatherService, useValue: weatherServiceStub }]
//     })
//     .compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(DashboardComponent);
//     component = fixture.componentInstance;
//     // weatherServiceStub = TestBed.inject(weatherService) // will create mockservice later
//     fixture.detectChanges();

     
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
