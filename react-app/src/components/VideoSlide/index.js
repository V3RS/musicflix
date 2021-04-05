import React from "react";
import IndivSlide from "../IndivSlide";
import "./VideoSlide.css";

export default function VideoSlide({ mvs }) {
  return (
    <div className="video__slides__c">
      {mvs?.map((mv) => (
        <IndivSlide key={mv?.id} mv={mv} />
      ))}
    </div>
  );
}
