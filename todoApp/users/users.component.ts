import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { User } from '../models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users?: User[];

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.GetUsers();
  }

  GetUsers(){
    this.usersService.getUsers().subscribe(resp => {
      this.users = resp;
    })
  }
}
