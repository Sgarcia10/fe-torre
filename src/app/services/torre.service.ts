import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { JobsResponse } from '../dtos/response/jobs.dto';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { TorreParams } from '../dtos/request/torreParams.dto';

@Injectable({
  providedIn: 'root'
})
export class TorreService {
  torreApiUrl;
  constructor(private http: HttpClient) {
    this.torreApiUrl = environment.torreApiUrl;
  }

  getJobs(torreParams: TorreParams): Observable<JobsResponse> {
    const params = { ...torreParams };
    return this.http.get<JobsResponse>(this.torreApiUrl + '/torre', {
      params
    });
  }
}
