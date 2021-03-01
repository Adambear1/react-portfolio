import React from "react";
import "./styles.css";
function PortfolioViewMoreModal({ open, setOpen }) {
  return (
    <div class="more-modal">
      <div class="more-modal-content">
        <span class="close" onClick={() => setOpen(false)}>
          &times;
        </span>
        <p>Some text in the Modal..</p>
      </div>
    </div>
  );
}

export default PortfolioViewMoreModal;
