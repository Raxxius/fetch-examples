// Basic fetch via Apps Script html URL returns parsed JSON
export default async function fetchAppsScript() {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbxSJDTFAKp0fRe5ICs18LiSuSD2FGQeeH_nykj7MuAM5Rk9ThCzWMgfhSHaPR0nQoQgJA/exec"
    );
  
    const data = await response.json();
    return data;
  }