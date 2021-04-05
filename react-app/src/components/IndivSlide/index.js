import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./IndivSlide.css";

import HoverSlide from "../HoverSlide";
import MVModal from "../MVModal";

import { openMV } from "../../store/modal";

export default function IndivSlide({ mv }) {
  const [hover, setHover] = useState(false);
  const dispatch = useDispatch();
  const open = () => dispatch(openMV());

  return (
    <>
      <MVModal mv={mv} />
      {hover ? (
        <div
          className="hover__c album"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          onClick={open}
        >
          <HoverSlide hover={hover} setHover={setHover} mv={mv} />
        </div>
      ) : (
        <div className="album__container" onClick={open}>
          <img
            className="album"
            src={mv?.coverart}
            alt="album cover"
            onMouseEnter={() => {
              setTimeout(() => {
                setHover(true);
              }, 300);
            }}
            onMouseLeave={() => setHover(false)}
          />
        </div>
      )}
      ;
    </>
  );
}
