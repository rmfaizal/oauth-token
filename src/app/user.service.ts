import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OAuthProviderService } from './oauth-provider';  // Import the OAuth provider service
import { map, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  private domain = 'dev-2xlyhzwr7rpiwjnn.us.auth0.com';
  private clientId = 'R3XBf1dE8RGQbpaRLgv7rXah59qN5Lus';
  private clientSecret = 'Pa8wa3VWyng73H5mny0cMUPa-zwhlcLXpWbZw11qlGyycJBgjk0DKhNe5prwdDY2';
  private audience = `https://${this.domain}/api/v2/`;

  constructor(private http: HttpClient, private oauthProvider: OAuthProviderService) {}

  // Fetch user details
  getUserDetails() {
    if (this.oauthProvider.isLoggedIn()) {
      const accessToken = this.oauthProvider.getAccessToken();
      return this.http.get(`https://${this.domain}/user`, {
        headers: { Authorization: `Bearer ${accessToken}` }
      });
    } else {
      throw new Error('User not logged in');
    }
  }

    // Get Management API token
    private getManagementToken(): Observable<string> {
      const url = `https://${this.domain}/oauth/token`;
      const body = {
        client_id: this.clientId,
        client_secret: this.clientSecret,
        audience: this.audience,
        grant_type: 'client_credentials'
      };
  
      return this.http.post<any>(url, body).pipe(
        map(res => res.access_token)
      );
    }
  // Create user using Management API
  createUser(userData: any): Observable<any> {
    return this.getManagementToken().pipe(
      switchMap(token => {
        const url = `https://${this.domain}/api/v2/users`;
        const headers = {
          Authorization: `Bearer ${token}`
        };

        const userPayload = {
          email: userData.email,
          password: userData.password,
          connection: 'Username-Password-Authentication'
        };

        return this.http.post<any>(url, userPayload, { headers });
      })
    );
  }
}
