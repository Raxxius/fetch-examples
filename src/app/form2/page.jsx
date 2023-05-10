import { google } from "googleapis";
import { use } from "react";

const sheetID = "1LelBXE4U50QU5dyfk5eYLNEP1Ve5_qiglMcEaLzUwQg";

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
}

export default function Page() {
  const sheet = use(getSheet());

  return <p>Hello</p>;
}
