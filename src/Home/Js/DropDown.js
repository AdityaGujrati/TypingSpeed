import React from "react";
import "../Css/DropDown.css";
function DropDown() {
  return (
    <div>
      <div class="dropdown">
        <div class="dropbtn">Dropdown</div>
        <div class="dropdown-content">
          <div href="#">Link 1</div>
          <div href="#">Link 2</div>
          <div href="#">Link 3</div>
        </div>
      </div>
    </div>
  );
}

export default DropDown;
