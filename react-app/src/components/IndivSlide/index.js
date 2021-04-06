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

  let timeout;
  return (
    <>
      {hover ? (
        <div
          className="hover__c album"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => {
            clearTimeout(timeout);
            setHover(false);
          }}
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
              timeout = setTimeout(() => {
                setHover(true);
              }, 300);
            }}
            onMouseLeave={() => {
              clearTimeout(timeout);
              setHover(false);
            }}
          />
        </div>
      )}
    </>
  );
}
