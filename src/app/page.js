import { use } from "react";
import fetchSheetsDirect from "./api/fetchSheetsDirect";
import fetchAppsScript from "./api/fetchAppsScript";
import fetchGoogleAPI from "./api/fetchGoogleAPI";

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
  const appsRowData = appsScriptData.slice(1);
  const appsFetch = appsRowData.map((data) => {
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


  //GoogleApi

  const googleApiData = use(fetchGoogleAPI())
  const apiRowData = googleApiData.slice(1);
  const apiFetch = apiRowData.map((data) => {
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
      <dic className="api">
        <h2>API Call</h2>
        {apiFetch}
      </dic>
    </div>
  );
}
