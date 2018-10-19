import { Component, OnInit } from '@angular/core';
import {UserServise} from './user.servise';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers : [UserServise]
})
export class AppComponent  {


}
