import { createClient } from "altogic";

// Create a client for interacting with Altogic backend app
// You need to provide `envUrl` and `clientKey` as input parameters
// Optionally, you can provide `apiKey`, `signInRedirect` and `realtime` parameters
// in options. More details can be found in the Options section

let envUrl = "https://c4-na.altogic.com/e:631b2caf4125deac1286873f"
let clientKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbnZJZCI6IjYzMWIyY2FmNDEyNWRlYWMxMjg2ODczZiIsImtleUlkIjoiNjMxYjJjYjE0MTI1ZGVhYzEyODY4NzRjIiwiaWF0IjoxNjYyNzI1Mjk3LCJleHAiOjI1MjY3MjUyOTd9.xIWyQhFbZmZZCs7FYznSOmKGrCgjl7kCiv9hbI9UgwA";
const altogic = createClient(envUrl, clientKey);
export default altogic