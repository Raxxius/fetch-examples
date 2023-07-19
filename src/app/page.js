import Intro from "./components/Intro.jsx";
import DirectFetch from "./components/DirectFetch.jsx";
import AppsScript from "./components/AppsScript.jsx";
import ApiCall from "./components/ApiCall.jsx";
import "./page.css"

export default function Form() {
  return (
    <div className="container">
      <Intro />
      <DirectFetch />
      <AppsScript />
      <ApiCall />
    </div>
  );
}
