import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './../dashboard/dashboard.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartComponent } from './start.component';
import { HttpClientModule } from '@angular/common/http';

describe('StartComponent', () => {
  let component: StartComponent;
  let fixture: ComponentFixture<StartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, FormsModule],
      declarations: [ StartComponent, DashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
