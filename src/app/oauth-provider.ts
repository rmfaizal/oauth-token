import { Injectable } from '@angular/core';
import { OAuthService, OAuthStorage } from 'angular-oauth2-oidc';
import { authConfig } from './auth.config'; // Import OAuth configuration

@Injectable({
  providedIn: 'root'
})
export class OAuthProviderService {

  constructor(private oauthService: OAuthService) {
    this.oauthService.configure(authConfig); // Configure OAuth service
    this.oauthService.setStorage(localStorage); // Using localStorage for token storage
  }

  // Start OAuth flow
  login() {
    this.oauthService.initCodeFlow();
  }

  // Log out the user
  logout() {
    this.oauthService.logOut();
  }

  // Check if the user has a valid access token
  isLoggedIn() {
    return this.oauthService.hasValidAccessToken();
  }

  // Get the access token
  getAccessToken() {
    return this.oauthService.getAccessToken();
  }

  // Handle OAuth redirect (after login)
  handleRedirect() {
    return this.oauthService.tryLogin();
  }
}
