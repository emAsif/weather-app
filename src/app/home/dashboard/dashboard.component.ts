import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less'],
  animations: [
  // trigger('fadeInOut', [
  //   transition(':enter', [
  //     style({ opacity: 0 }),
  //     animate('1000ms', style({ opacity: 1 })),
  //   ]),
  //   transition(':leave', [
  //     animate('10ms', style({ opacity: 0 }))
  //   ])
  // ])
  trigger('fadeInOut', [
    state('void', style({
      opacity: 0
    })),
    transition('void <=> *', animate(1000)),
  ])
]
})
export class DashboardComponent implements OnInit {
  title = 'weather-app';
  constructor() { }

  ngOnInit(): void {
  }

}
