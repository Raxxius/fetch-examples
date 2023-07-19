export default function DataWrapper(data) {
  return (
    <div className="wrapper" key={`apps${data}`}>
      <div className="title">{data[0]}</div>
      <div className="result">
        {data[1]}
        <span className="sub-result">
          <i> {data[2]}</i>
        </span>
      </div>
    </div>
  );
}
