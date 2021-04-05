import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import "./MusicVideoPage.css";

export default function MusicVideoPage() {
  const [mv, setMV] = useState({});

  const { mvId } = useParams();
  console.log("mehhhhhhhh");
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`/api/mv/${mvId}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setMV(data);
    };
    fetchData();
  }, [mvId]);

  return (
    <div className="mv__c">
      <h1>{mv?.title}</h1>
    </div>
  );
}
