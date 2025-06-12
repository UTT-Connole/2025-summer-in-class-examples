"use client";

import { ReactNode } from "react";
import { useState } from "react";

type DeleteableHeaderProps = {
  children: ReactNode;
};

const DeleteableHeader = ({ children }: DeleteableHeaderProps) => {
  const [showHeader, setShowHeader] = useState(true);

  const handleClick = () => {
    setShowHeader(false);
  };
  return <>{showHeader && <h1 onClick={handleClick}>{children}</h1>}</>;
};

export default DeleteableHeader;
