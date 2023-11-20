import { Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponse,HttpHeaders} from  '@angular/common/http';
import { Observable } from 'rxjs';
import { Player } from '../../models/player.model';
import { Team } from '../../models/team.model';

@Injectable({
  providedIn: 'root'
})

export class AdminService{


  private url1 = "https://8080-abfbbcbcacdfacbbecabcdadeafbbdcaeafe.premiumproject.examly.io/Admin"
  constructor(private httpclient :HttpClient) { }

  playerdata : Player[]
  teamData : Team[]

  httpOptions = {headers : new HttpHeaders({'content-type':'application/json'})}
   //httpOptions = {headers: new HttpHeaders({'content-type':'application/json'})}

  getPlayers():Observable<Player[]>
  {
    return this.httpclient.get<Player[]>(this.url1+'/ShowPlayers');
  }
  getTeams():Observable<Team[]>
  {
    return this.httpclient.get<Team[]>(this.url1+'/ShowTeam');
  }
  AddPlayer(player :Player):Observable<Player>{
    return this.httpclient.post<Player>(this.url1+'/AddPlayer',player,this.httpOptions);
  }
  createTeam(player :Team):Observable<Team>{
    return this.httpclient.post<Team>(this.url1+'/AddPlayer',player,this.httpOptions);
  }


}