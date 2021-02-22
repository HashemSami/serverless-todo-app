// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = 'gny5fe5tz1'
export const apiEndpoint = `https://${apiId}.execute-api.ap-south-1.amazonaws.com/dev`

export const authConfig = {
  // TODO: Create an Auth0 application and copy values from it into this map
  domain: 'dev-iyfq793l.eu.auth0.com', // Auth0 domain
  clientId: 'SFlbpQnQRanaZIY5Lhnw92zp36hYHB6k', // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
}
