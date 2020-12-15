import { Component, OnInit } from '@angular/core';
import { TorreParams } from '../dtos/request/torreParams.dto';
import { JobsResponse } from '../dtos/response/jobs.dto';
import { TorreService } from '../services/torre.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  loadingJobs = false;
  jobs: JobsResponse;

  constructor(private torreService: TorreService) {}

  ngOnInit(): void {}

  jobsSearch(params: TorreParams) {
    this.loadingJobs = true;
    this.torreService.getJobs(params).subscribe((jobs) => {
      this.loadingJobs = false;
      this.jobs = jobs;
    });
  }
}
