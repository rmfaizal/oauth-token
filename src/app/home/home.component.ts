import { Component } from '@angular/core';
import { OAuthProviderService } from '../oauth-provider';  // Import the OAuth service
import { UserService } from '../user.service';           // Import the user service

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private oauthService: OAuthProviderService, private userService: UserService) {}

  ngOnInit() {
    // Check if user is logged in
    if (this.oauthService.isLoggedIn()) {
      console.log('User is already logged in');
    } else {
      this.oauthService.login();
    }
  }

  login() {
    this.oauthService.login(); // Start OAuth flow
  }

  logout() {
    this.oauthService.logout(); // Log out the user
  }

  createUser(userData: any) {
    this.userService.createUser(userData).subscribe(
      (response) => console.log('User created successfully:', response),
      (error) => console.error('Error creating user:', error)
    );
  }
}
