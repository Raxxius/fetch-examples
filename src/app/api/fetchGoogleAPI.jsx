import { google } from "googleapis";

// Get sheet function with auth and scopes provides an array of arrays
export default async function fetchGoogleAPI() {
    const auth = await google.auth.getClient({
      scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
      projectId: process.env.GOOGLE_PROJECTID,
      credentials: {
        private_key: process.env.GOOGLE_PRIVATE_KEY,
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
      },
    });
  
    const sheets = google.sheets({ version: "v4", auth });
  
    // Query
    const range = `page1`;
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: "1xAY6jBd5cJPIF3UfnsDveUZL-f_qNShGb3WFQItq-vw",
      range,
    });
  
    // Result
    const data = response.data;
    const returnValue = data.values
  
    return returnValue;
  }