import fetchSheetsDirect from "../api/fetchSheetsDirect";
import DataWrapper from "../hooks/dataWrapper";
import { use } from "react";

export default function DirectFetch() {
  //DirectFetch
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
    return DataWrapper(data);
  });

  return (
    <div className="direct-fetch primary">
      <h2>Direct fetch</h2>
      <p className="main-text">
        This data has been fetched via a{" "}
        <a
          href="https://developers.google.com/chart/interactive/docs/querylanguage"
          className="inline-link"
          target="_blank"
        >
          Google Visualisation Query
        </a>
      </p>
      {directFetch}
    </div>
  );
}
