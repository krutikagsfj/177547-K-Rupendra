import { Component, OnInit } from '@angular/core';
import { GameList } from '../model/GameList-model';
import { GamelistService } from '../service/gamelist.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {
GameList:GameList[];
  constructor(private gameservice:GamelistService, private router:Router) { }

  ngOnInit() {
    this.gameservice.getgamelist().subscribe((data:GameList[])=>{
      this.GameList=data;
    })
  }
  onSubmits(){
    this.router.navigate(['success']);
  }

}
