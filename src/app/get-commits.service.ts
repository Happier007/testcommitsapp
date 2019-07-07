import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Commit } from './interfaces/commit.interface';
 
@Injectable()
export class GetCommitsService {

  constructor(private httpClient: HttpClient) { }

  getData(login: string, repos: string): Observable<any> {
    return this.httpClient.get(`https://api.github.com/repos/${login}/${repos}/commits`);
  }
}