import {Component, OnInit, Input} from '@angular/core';
import {Team} from '../shared/model/Team';
import * as _ from 'lodash';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  @Input() team: Team;

  constructor() { }

  ngOnInit() {

  }

  remainingBudget(): number {
    return this.team.budget -
      this.team.players.map(player => player.salary).reduce((salary, sum) => sum + salary, 0);
  }

}
