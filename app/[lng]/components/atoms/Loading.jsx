import React from "react";
function Loading() {
  return (
    <div className="container flex items-center justify-center my-2">
      <div className="relative">
        <div className="lds-ellipsis">
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
    </div>
  );
}

export default Loading;
