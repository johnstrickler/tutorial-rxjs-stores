import {Component, OnInit} from '@angular/core';
import {TeamStore} from './shared/state/team.store';
import {Team} from './shared/model/Team';
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    TeamStore
  ]
})
export class AppComponent implements OnInit {

  teams: Team[] = [];

  constructor(private teamStore: TeamStore) {

  }

  ngOnInit(): void {
    this.teamStore.getTeams().subscribe((teams) => {
      this.teams = teams;
    });
  }

  chunkTeams(size: number) {
    return _.chunk(this.teams, size);
  }
}
