import { useState } from "react";

function Input() {
  const [w, setW] = useState(false);

  return (
    <div className="w3-card-4 w3-margin w3-padding-large w3-round-large w3-brown">
      <h3 className="w3-center">exacqVision keyboard</h3>
      <h4>Status: Connected</h4>
    </div>
  );
}

export default Input;
