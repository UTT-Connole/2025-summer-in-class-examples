
import { useState } from 'react';
const DeleteableHeader = ({children}) => {

  const [showHeader, setShowHeader] = useState(true);

  const handleClick = () => {
    setShowHeader(false)
  };
    return (
        <>
      {showHeader && (
        <h1 onClick={handleClick}>{children}</h1>
      )}
        </>
    )
}

export default DeleteableHeader;