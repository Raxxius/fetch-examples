import styles from '../page.module.css'
import { google } from "googleapis";


/**
 * 1# get google sheet data
 * draw form from google sheet
 * get form data
 * convert form data into 
  **/
async function fetchSheetData() {
  console.log("Getting sheet data")

  const response = await fetch("https://script.google.com/macros/s/AKfycbxqIxEcRyUMk-w881TNYXARgbwR1NE7az3CtO8p7B6nTtljCMML5MM6fsUlFwVU6NVs/exec");

  const data = await response.json();

  console.log("data is" + data)

  return {
      data
  }
}

export default async function Form() {
  const sheetData = await fetchSheetData();

  console.log(sheetData.data)
  return (
    <div className={styles.container}>
        <div>
          <p>Test</p>
        </div>
    </div>
  )
}
