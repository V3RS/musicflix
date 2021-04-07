import React from "react";
// import { useSelector } from "react-redux";
// import IndivSlide from "../IndivSlide";
// import { useParams } from "react-router";
import "./MyList.css";
import MVModal from "../MVModal";

export default function MyList() {
  //   const mvList = useSelector((state) => state.mvSearch.search_mvs);
  //   const wid = true;
  return (
    <div id="search__p__c">
      <MVModal />
      <div id="search__title">My List</div>
      <div id="search__content__c">
        {/* {mvList?.map((mv) => (
          <div id="search__indiv">
            <div id="search__mv__title">{mv.title}</div>
            <IndivSlide key={mv.id} mv={mv} wid={wid} />
          </div>
        ))} */}
      </div>
    </div>
  );
}
