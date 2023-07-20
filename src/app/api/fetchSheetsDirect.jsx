// Raw fetch, returns column list, all data is returned
export default async function fetchSheetsDirect() {
    const response = await fetch(
      "https://docs.google.com/spreadsheets/d/1xAY6jBd5cJPIF3UfnsDveUZL-f_qNShGb3WFQItq-vw/gviz/tq?sheet=sheet1",
      {cache: "no-store"}
    );
  
    const data = await response.text();
    const dataParsed = JSON.parse(data.substring(47).slice(0, -2));
    const returnValue = dataParsed;
    return returnValue;
  }