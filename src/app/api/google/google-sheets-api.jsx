import { google } from "googleapis";

export default async function getData(range, spreadsheetId) {
    // Auth
  
    const auth = await google.auth.getClient({
      scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
    });
  
    const sheets = google.sheets({ version: "v4", auth });
  
    // Query
    
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: '1LelBXE4U50QU5dyfk5eYLNEP1Ve5_qiglMcEaLzUwQg',
      range,
    });
  
    // Result
  
     const fetchdata = response.data.values;
  
    return {
        fetchdata
    };
  }