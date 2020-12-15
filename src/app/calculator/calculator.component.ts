import { Component, OnInit } from '@angular/core';
import { TorreParams } from '../dtos/request/torreParams.dto';
import { TorreService } from '../services/torre.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  constructor(private torreService: TorreService) {}

  ngOnInit(): void {}

  jobsSearch(params: TorreParams) {
    this.torreService.getJobs(params).subscribe((jobs) => {
      console.log(jobs);
    });
  }
}
