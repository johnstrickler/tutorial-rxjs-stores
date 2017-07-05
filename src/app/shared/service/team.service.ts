import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Team} from "../model/Team";
import {Observable} from "rxjs";

@Injectable()
export class TeamService {

  constructor(private http: Http) {

  }

  getTeams(): Observable<Team[]> {
    return this.http.get('/api/teams.json').map(response => response.json());
  }

}
