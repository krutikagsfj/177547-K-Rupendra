import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import{PlayComponent } from '../play/play.component';
import {GamelistService} from '../service/gamelist.service'
@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  constructor( private router:Router,gameservice:GamelistService) { }

  ngOnInit() {
  
      // this.empformlabel = 'Edit Employee';
      // this.empformbtn = 'Update';
    }
  }


