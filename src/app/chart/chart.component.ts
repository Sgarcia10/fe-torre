import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements AfterViewInit {
  @ViewChild('barcanvas') barCanvas: ElementRef;

  barChart: any;

  constructor() {}

  ngAfterViewInit() {
    console.log(this.barCanvas);

    this.barChartMethod();
  }

  barChartMethod() {
    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: 'line',
      data: {
        labels: ['BJP', 'INC', 'AAP', 'CPI', 'CPI-M', 'NCP'],
        datasets: [
          {
            label: '# of jobs',
            data: [200, 50, 200, 15, 20, 34],
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
                labelString: '$/hour',
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
                stepSize: 40,
                beginAtZero: true
              }
            }
          ]
        }
      }
      // options: {
      //   scales: {
      //     yAxes: [
      //       {
      //         ticks: {
      //           beginAtZero: true
      //         }
      //       }
      //     ]
      //   }
      // }
    });
  }
}
