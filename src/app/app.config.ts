export const authConfig = {
  issuer: 'https://<your-oauth-provider-domain>', // Replace with your OAuth provider (Auth0, Keycloak, etc.)
  redirectUri: window.location.origin + '/callback', // URL for OAuth provider to redirect after login
  clientId: '<your-client-id>',                    // Your OAuth client ID
  scope: 'openid profile email',                   // Scopes you need
  responseType: 'code',                            // For Authorization Code Flow
  showDebugInformation: true,                      // Optional: enable debug info in the console
  sessionChecksEnabled: true                       // Optional: enable session checks
};
