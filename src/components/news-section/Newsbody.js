import React from "react";
import Frontnews from "./Frontnews";
import Newslist from "./Newslist";

export default function Newsbody() {

  return (
    <>
      <div className="news-body">
        <Frontnews />
        <Newslist />
      </div>
    </>
  );
}
