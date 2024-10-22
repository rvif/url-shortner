import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <nav>
      <Link>
        <img src="/logo.svg" className="h-16" alt="logo" />
      </Link>

      {/* // Login button */}
      <div>
        <Button>Login</Button>
      </div>
    </nav>
  );
};

export default Header;
