import fetchAppsScript from "../api/fetchAppsScript";
import DataWrapper from "../hooks/dataWrapper";
import { use } from "react";

export default function AppsScript() {
  //AppsScript
  const appsScriptData = use(fetchAppsScript());
  const appsRowData = appsScriptData.slice(1);
  const appsFetch = appsRowData.map((data) => {
    return DataWrapper(data);
  });

  return (
    <div className="apps-script primary">
      <h2 className="fetch-title">Apps Script</h2>
      <p>
        This data has been fetched via the{" "}
        <a
          href="https://www.google.com/script/start/"
          className="inline-link"
          target="_blank"
        >
          Google Apps Script
        </a>
      </p>
      {appsFetch}
    </div>
  );
}
