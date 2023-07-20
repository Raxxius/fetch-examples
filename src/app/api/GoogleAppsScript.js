/**Note this code is not run as part of the NextJS client, it is part of the Google Apps Script functionality.

This code goes in https://www.google.com/script/start/ as part of a spreadsheet script

**/

function doGet() {
    // get values from the active sheet
    const sheet = SpreadsheetApp.getActiveSheet();
    const data = sheet.getDataRange().getValues();
  
    // Convert data into a JSON file
    const val = JSON.stringify(data);
  
    // Create a webpage with a JSON
    return ContentService.createTextOutput(val).setMimeType(ContentService.MimeType.JSON)
  }
  