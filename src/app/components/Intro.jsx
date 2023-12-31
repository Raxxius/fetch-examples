import Github from "../resources/github-icon";
import Sheets from "../resources/google-sheets";

export default function Intro() {
  return (
    <div className="intro primary">
      <h1 className="title text">Google Apps Fetch Request Demos</h1>
      <p className="text">
        This website is an active demo of Fetching Data From Google applications
      </p>
      <p className="text">For this test Google sheets is used</p>
      <div className="button-box">
        <a
          className="secondary link"
          href="https://docs.google.com/spreadsheets/d/1xAY6jBd5cJPIF3UfnsDveUZL-f_qNShGb3WFQItq-vw/edit#gid=0"
          target="_blank"
        >
          View Google Sheet <Sheets />
        </a>
        <a href="" className="secondary link">
          See the source code <Github />
        </a>
      </div>
      <a
        href="https://keith-blackwood.com/blog/1qi7iNMQx5bN3AAVfHVA5un3M82xLMv_VNFtUcvlIQ9E"
        className="secondary blog-link"
        target="_blank"
      >
        View the blog article
      </a>
    </div>
  );
}
