import React, { useState } from "react";
import { Menu } from "../ui/menu";
import { UpdateUserInfo } from "./updateUserInfo";
import { UserInfo } from "./userInfo";

export const HomeScreen = () => {

  const [viewUserUpdateInfo, setViewUserUpdateInfo] = useState(false)

  return (
    <>
      <div className="container container-app">
        <Menu />
        <div className="box mt-5">
          <UserInfo setView={setViewUserUpdateInfo}/>
          <UpdateUserInfo view={viewUserUpdateInfo}/>
        </div>
      </div>
    </>
  );
};
