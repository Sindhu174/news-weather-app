import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  userName: string;

  constructor() { }

  ngOnInit(): void {
    this.userName = localStorage.getItem("loggedUser")
  }

}
