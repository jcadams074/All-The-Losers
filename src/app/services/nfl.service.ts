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
export class NflService {

    constructor(private http: HttpClient) {}
 
    private apiUrl = 'https://site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard';

  getGames(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}