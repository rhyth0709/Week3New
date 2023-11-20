import { Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponse,HttpHeaders} from  '@angular/common/http';
import { Observable } from 'rxjs';
import { Player } from '../models/player.model';
import { Team } from '../models/team.model';
@Injectable({
  providedIn: 'root'
})
export class PlayerService {
   

  private url1 = "https://8080-abfbbcbcacdfacbbecabcdadeafbbdcaeafe.premiumproject.examly.io/Admin"
  constructor(private httpclient :HttpClient) { }

  playerdata : Player[]
  teamData : Team[]

  getPlayers():Observable<Player[]>
  {
    return this.httpclient.get<Player[]>(this.url1+'/ShowPlayers');
  }
  getTeams():Observable<Team[]>
  {
    return this.httpclient.get<Team[]>(this.url1+'/ShowTeam');
  }

}
