import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';  // Import the user service

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  userData: any;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUserDetails().subscribe(
      (response) => this.userData = response,
      (error) => console.error('Error fetching user data:', error)
    );
  }
}
