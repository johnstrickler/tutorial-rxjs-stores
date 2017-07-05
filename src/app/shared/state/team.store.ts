import {TeamService} from "../service/team.service";
import {Team} from "../model/Team";
import {Observable, BehaviorSubject} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable()
export class TeamStore {

  initialized = false;

  private teamSubject = new BehaviorSubject(null);

  constructor(private teamService: TeamService) {

  }

  getTeams(): Observable<Team[]> {

    if (this.teamSubject.getValue() === null) {
      this.teamService.getTeams().subscribe((teams) => {
        this.teamSubject.next(teams);
      });
    }

    return this.teamSubject.asObservable();
  }

}
