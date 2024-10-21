import { Component, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Team {
    team:{
        displayName: string;
        logo: string;
    }
    winner: boolean;
  }

@Injectable({
  providedIn: 'root',
})
export class NbaService {

    constructor(private http: HttpClient) {}
 
    private apiUrl = 'http://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard';

  getGames(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}