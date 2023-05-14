import React from "react";
function loading() {
  const current_color = "black";
  return (
    <div className="container flex items-center justify-center my-2">
      <div className="relative">
        <div className="lds-ellipsis">
          <div style={{ backgroundColor: `${current_color} !important` }} />
          <div style={{ backgroundColor: `${current_color} !important` }} />
          <div style={{ backgroundColor: `${current_color} !important` }} />
          <div style={{ backgroundColor: `${current_color} !important` }} />
        </div>
      </div>
    </div>
  );
}

export default loading;
