import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button className="btn btn-outline-primary" 
     onClick={() => logout({ returnTo: window.location.origin })}>
      <h5>
      Log Out
        </h5>
    </button>
  );
};

export default LogoutButton;