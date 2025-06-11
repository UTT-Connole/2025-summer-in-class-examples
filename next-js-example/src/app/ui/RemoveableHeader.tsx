"use client";

import { useState } from "react";
const RemoveableHeader = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClick = async () => {
    setTimeout(() => setIsVisible(false), 3000);
  };

  return isVisible ? <h1 onClick={handleClick}>BRAYDEN WAS HERE</h1> : <></>;
};

export default RemoveableHeader;
