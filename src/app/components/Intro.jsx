export default function Intro() {
  return (
    <div className="intro primary">
      <h1 className="title text">Google Apps Fetch Request Demos</h1>
      <p className="text">
        This website is an active demo of Fetching Data From Google applications
      </p>
      <p className="text">For this test Google sheets is used</p>
      <button
        className="secondary"
        href="https://docs.google.com/spreadsheets/d/1xAY6jBd5cJPIF3UfnsDveUZL-f_qNShGb3WFQItq-vw/edit#gid=0"
        target="_blank"
      >
        View the Sheet
      </button>
      <button href="" className="secondary">
        Github
      </button>
    </div>
  );
}
