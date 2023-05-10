import { use } from "react";
import BlogParse from "./BlogParse";
import FetchBlog from "./FetchBlog"


export default function Page() {
  const sheet2 = use(FetchBlog("https://script.google.com/macros/s/AKfycbzLDVpe-SiHpZiYCh7f2FgfC_Q2Y8aMCgr_HMu2AWKeolTdfTqz9o2JebMFYvsRdW_e/exec"));

  const blog = sheet2.map(blogElement => {
    return <BlogParse {...blogElement} />
  }
  )

  return (
    <>
      <div className="blog-header">Header go here</div>
      <div className="blog-wrapper">{blog}</div>
    </> 
    );
}
