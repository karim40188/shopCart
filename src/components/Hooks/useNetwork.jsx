import React, { useEffect, useState } from "react";

function useNetwork() {
  let [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    networkMsg();
  });

  function networkMsg() {
  
    window.addEventListener("offline", () => {
      setIsOnline(false)
    });
  }

  return (
    <>
      {isOnline ? (
       ""
      ) : (
        <div className="network">
          <i className="fas fa-wifi"></i>you are offline
        </div>
      )}
    </>
  );
}

export default useNetwork;
