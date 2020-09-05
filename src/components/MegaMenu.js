import React from "react";
import "./components.css";

const MegaMenu = () => {
  return (
    <div>
      <div className="dropdown-content">
        <div className="row">
          <div className="column">
            <h4>General</h4>
            <a href="#">User</a>
            <h3>Currency</h3>
            <a href="#">Currencies</a>
            <a href="#">Currency Conversion</a>
            <a href="#">Bank Clearing Code</a>
          </div>
          <div className="column">
            <h4>Location</h4>
            <a href="#">Location</a>
            <a href="#">Holiday Schedule</a>
            <h4>Company</h4>
            <a href="#">Legal Entity</a>
            <a href="#">Company</a>
            <a href="#">Company Bank Account</a>
            <a href="#">Company Account Type</a>
          </div>
          <div className="column">
            <h4>Counterparty</h4>
            <a href="#">Financial Institution</a>
            <a href="#">CounterParty</a>
            <a href="#">CounterParty Contact</a>
            <a href="#">CounterParty Bank Account</a>
            <h4>User Defined Data</h4>
            <a href="#">Portfolio</a>
            <a href="#">Group</a>
            <a href="#">User Defined Fields</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;
