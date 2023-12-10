import React from "react";
import Navbar from "../features/navbar/Navbar";
import UserProfile from "../features/user/components/UserProfile";

function UserOrderPage() {
  return (
    <div>
      <Navbar>
        <UserProfile></UserProfile>
      </Navbar>
    </div>
  );
}

export default UserOrderPage;
