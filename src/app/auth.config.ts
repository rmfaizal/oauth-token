import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {
  issuer: 'https://dev-2xlyhzwr7rpiwjnn.us.auth0.com',
  redirectUri: window.location.origin,
  clientId: 'R3XBf1dE8RGQbpaRLgv7rXah59qN5Lus',
  responseType: 'code',
  scope: 'openid profile email',
  showDebugInformation: true,
  strictDiscoveryDocumentValidation: false
};
