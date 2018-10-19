import { Component, OnInit } from '@angular/core';
import {UserServise} from '../user.servise';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  users = [];
  searchStr = '';

  constructor(private userServise: UserServise) {}
  ngOnInit() {
    this.userServise.getUsers().subscribe(users => {
      this.users = users;
    });
  }

}
