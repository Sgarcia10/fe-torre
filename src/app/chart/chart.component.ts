import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { JobsResponse } from '../dtos/response/jobs.dto';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements AfterViewInit {
  @ViewChild('barcanvas') barCanvas: ElementRef;

  @Input() jobs: JobsResponse;

  barChart: any;
  labels: number[];
  data: number[];

  constructor() {}

  ngAfterViewInit() {
    this.data = this.jobs?.salaries.map((s) => s.total);
    this.labels = this.jobs?.salaries.map((s) => s.amount);
    if (this.jobs) this.barChartMethod();
  }

  barChartMethod() {
    this.barChart = new Chart(this.barCanvas?.nativeElement, {
      type: 'line',
      data: {
        labels: this.labels,
        datasets: [
          {
            label: '# of jobs',
            data: this.data,
            backgroundColor: ['rgba(205, 207, 57, 0.8)'],
            borderColor: ['rgba(205, 207, 57, 0.2)'],
            borderWidth: 1,
            fill: true
          }
        ]
      },
      options: {
        responsive: true,
        legend: {
          labels: {
            fontColor: 'white',
            fontSize: 14
          }
        },
        scales: {
          ticks: {
            fontColor: 'white'
          },
          xAxes: [
            {
              display: true,
              scaleLabel: {
                display: true,
                fontColor: 'white',
                labelString: 'USD$/hour',
                fontSize: 18
              },
              ticks: {
                fontColor: 'white',
                fontSize: 14,
                stepSize: 1,
                beginAtZero: true
              }
            }
          ],
          yAxes: [
            {
              display: true,
              ticks: {
                fontColor: 'white',
                fontSize: 14,
                stepSize: 50,
                beginAtZero: true
              }
            }
          ]
        }
      }
    });
  }
}
