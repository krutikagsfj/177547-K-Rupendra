import { Injectable } from '@angular/core';
import {GameList} from '../model/GameList-model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GamelistService {

  constructor(private http:HttpClient) { }
  baseUrl: string='http://localhost:3000/GameList';
  getgamelist(){
    return this.http.get<GameList[]>(this.baseUrl);
  }
  getgamebyid(id:number){
    return this.http.get<GameList>(this.baseUrl+'/'+id)
  }
}
