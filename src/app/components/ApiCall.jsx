import fetchGoogleAPI from "../api/fetchGoogleAPI";
import DataWrapper from "../hooks/dataWrapper";
import { use } from "react";

export default function ApiCall() {
  //GoogleApi
  const googleApiData = use(fetchGoogleAPI());
  const apiRowData = googleApiData.slice(1);
  const apiFetch = apiRowData.map((data) => {
    return DataWrapper(data);
  });

  return (
    <div className="api primary">
      <h2>API Call</h2>
      <p>
        This data has been fetched by the{" "}
        <a
          href="https://www.npmjs.com/package/googleapis"
          className="inline-link"
          target="_blank"
        >
          Google APIs node.js client{" "}
        </a>
      </p>
      {apiFetch}
    </div>
  );
}
