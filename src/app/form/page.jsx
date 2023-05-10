import { google } from "googleapis"
import { use } from "react"


/**
 * 1# get google sheet data
 * draw form from google sheet
 * get form data
 * convert form data into
 **/

// Basic fetch via Apps Script html URL returns parsed JSON
async function fetchAppsScript() {
  console.log("Fetching Apps Script Data");

  const response = await fetch(
    "https://script.google.com/macros/s/AKfycbxqIxEcRyUMk-w881TNYXARgbwR1NE7az3CtO8p7B6nTtljCMML5MM6fsUlFwVU6NVs/exec"
  );

  const data = await response.json();

  return {
    data,
  };
}


// Raw fetch, returns column list, little weirdly setup and a bit broken, but all data is returned 
async function fetchSheetsDirect() {
  console.log("Fetching direct sheet");

  const response = await fetch(
    `https://docs.google.com/spreadsheets/d/1LelBXE4U50QU5dyfk5eYLNEP1Ve5_qiglMcEaLzUwQg/gviz/tq?sheet=Form2`
  );

  const data = await response.text();
  const dataParsed = JSON.parse(data.substring(47).slice(0, -2));
  const returnValue = dataParsed.table;

  return {
    returnValue,
  };
}

// Get sheetfunction with auth and scopes provides an array of arrays = best to work with
async function getSheet() {
  const auth = await google.auth.getClient({
    scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
  });

  const sheets = google.sheets({ version: "v4", auth });

  // Query

  const range = `Form2`;

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: "1LelBXE4U50QU5dyfk5eYLNEP1Ve5_qiglMcEaLzUwQg",
    range,
  });

  // Result

  const data = response.data;

  console.log(data);

  return data;
}


export default function Form() {
  const sheetData = use(fetchAppsScript());

  console.log(sheetData)


  return (
    <div className='container'>
      <div>
        <p>Test</p>
        {sheetData.data.intro}
      </div>
      <p>Test2</p>
    </div>
  );
}
