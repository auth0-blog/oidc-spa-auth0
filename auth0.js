// constants with your own configuration properties
const oidcProvider = 'oidc-handbook.auth0.com';
const clientId = 'bKikeccK4xDZvq5cssoBlw6Jtq7HPHFH';
const audience = 'https://to-dos.somedomain.com';

// constants that represent configuration you won't need to change
const redirectURI = 'http://localhost:3000/#callback';
const scope = 'read:to-dos';

// auth0 client
let auth0;

// user data
let accessToken = '';
let profile = '';

async function init() {
  auth0 = await createAuth0Client({
    domain: oidcProvider,
    client_id: clientId,
    redirect_uri: redirectURI,
    audience: audience,
    scope: scope
  });
}

async function login() {
  await init();
  await auth0.loginWithRedirect();
}

async function handleRedirectCallback() {
  await init();
  await auth0.handleRedirectCallback();
  profile = await auth0.getUser();
  accessToken = await auth0.getTokenSilently();
}

function isAuthenticated() {
  return profile;
}

function getProfile() {
  return profile;
}

function getAccessToken() {
  return accessToken;
}
