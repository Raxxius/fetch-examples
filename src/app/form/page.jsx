import { google } from "googleapis";
import { use } from "react";

/**
 * 1# get google sheet data
 * draw form from google sheet
 * get form data
 * convert form data into
 **/

// Raw fetch, returns column list, all data is returned
async function fetchSheetsDirect() {
  const response = await fetch(
    "https://docs.google.com/spreadsheets/d/1xAY6jBd5cJPIF3UfnsDveUZL-f_qNShGb3WFQItq-vw/gviz/tq?sheet=sheet1"
  );

  const data = await response.text();
  const dataParsed = JSON.parse(data.substring(47).slice(0, -2));
  const returnValue = dataParsed;
  return returnValue;
}

// Basic fetch via Apps Script html URL returns parsed JSON
async function fetchAppsScript() {
  const response = await fetch(
    "https://script.google.com/macros/s/AKfycbxSJDTFAKp0fRe5ICs18LiSuSD2FGQeeH_nykj7MuAM5Rk9ThCzWMgfhSHaPR0nQoQgJA/exec"
  );

  const data = await response.json();
  return data;
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
  //directFetch
  const directFetchData = [];
  const directFetchSheetData = use(fetchSheetsDirect());
  const rowData = directFetchSheetData.table.rows.slice(1);
  for (const row in rowData) {
    let newArray = rowData[row];
    let pushArray = [];
    newArray.c.map((value) => {
      pushArray.push(value.v);
    });
    directFetchData.push(pushArray);
  }

  const directFetch = directFetchData.map((data) => {
    return (
      <div className="wrapper" key={`direct${data}`}>
        <div className="title">{data[0]}</div>
        <div className="result">
          {data[1]}
          <span className="sub-result">
            <i> {data[2]}</i>
          </span>
        </div>
      </div>
    );
  });

  //AppsScript

  const appsScriptData = use(fetchAppsScript());
  console.log(appsScriptData);
  const appsFetch = appsScriptData.map((data) => {
    return (
      <div className="wrapper" key={`apps${data}`}>
        <div className="title">{data[0]}</div>
        <div className="result">
          {data[1]}
          <span className="sub-result">
            <i> {data[2]}</i>
          </span>
        </div>
      </div>
    );
  });

  return (
    <div className="container">
      <div className="direct-fetch">
        <h2>Direct fetch</h2>
        {directFetch}
      </div>
      <div className="apps-script">
        <h2>Apps Script</h2>
        {appsFetch}
      </div>
    </div>
  );
}
