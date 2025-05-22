import { Component, OnInit } from '@angular/core';
import { OAuthProviderService } from './oauth-provider';  // Import OAuth service

@Component({
  selector: 'app-callback',
  template: `<h1>Logging in...</h1>`,
  styleUrls: []
})
export class CallbackComponent implements OnInit {

  constructor(private oauthService: OAuthProviderService) {}

  ngOnInit() {
    // Attempt to log in with the OAuth redirect
    this.oauthService.handleRedirect().then(() => {
      if (this.oauthService.isLoggedIn()) {
        console.log('Login successful');
        // Redirect to dashboard or home page
        window.location.href = '/dashboard';
      } else {
        console.log('Login failed');
      }
    });
  }
}
