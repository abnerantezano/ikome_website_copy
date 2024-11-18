import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CounterService {

    constructor() { }

    animateCount(start: number, end: number, duration: number, callback: (count: number) => void): void {
        const range = end - start;
        const increment = range / (duration / 30);
        let currentCount = start;

        const interval = setInterval(() => {
            currentCount += increment;
            if (currentCount >= end) {
                currentCount = end;
                clearInterval(interval);
            }
            callback(Math.floor(currentCount));
        }, 30);
    }
}