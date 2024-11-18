import { Component, AfterViewInit } from '@angular/core';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-counts',
  templateUrl: './counts.component.html',
  styleUrls: ['./counts.component.css']
})
export class CountsComponent implements AfterViewInit {

  countValue = 0;

  constructor(private counterService: CounterService) { }

  ngAfterViewInit(): void {
    this.startCountAnimation();
  }

  startCountAnimation(): void {
    const start = 0;
    const end = 1000;
    const duration = 2000;

    this.counterService.animateCount(start, end, duration, (count: number) => {
      this.countValue = count;
    });
  }
}