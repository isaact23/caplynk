
function SystemStatus() {
  return (
    <div className="w3-card-4 w3-margin w3-padding-large w3-round-large w3-brown">
      <h3 className="w3-center">System Status</h3>
      <div className="w3-bar">
        <img src="icons/x_icon.png" className="w3-bar-item" alt="status icon" style={{maxWidth: "70px"}}></img>
        <div className="w3-bar-item">
          <h4>esp32 servo</h4>
        </div>
      </div>
      <div className="w3-bar">
        <div className="w3-bar-item">
          <img src="icons/check_icon.png" alt="status icon" style={{maxWidth: "30px"}}></img>
        </div>
        <div className="w3-bar-item">
          <h4>Another system</h4>
        </div>
      </div>
    </div>
  );
}

export default SystemStatus;
