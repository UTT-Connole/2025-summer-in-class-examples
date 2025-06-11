"use client";

import { useState } from "react";
const RemoveableHeader = () => {
  const [isVisible, setIsVisible] = useState(true);

  return isVisible ? (
    <h1 onClick={() => setIsVisible(false)}>BRAYDEN WAS HERE</h1>
  ) : (
    <></>
  );
};

export default RemoveableHeader;
