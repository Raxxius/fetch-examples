import { google } from "googleapis";

// Get sheet function with auth and scopes provides an array of arrays
export default async function fetchGoogleAPI() {
    const auth = await google.auth.getClient({
      scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
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