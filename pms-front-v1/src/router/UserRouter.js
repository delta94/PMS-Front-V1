import React from "react";
import { Switch, Route } from "react-router-dom";

import {
  MainPage,
  Login,
  SignUp,
  Calender,
  CreatorsInfo,
  ClubInfo,
  CompanyInfo,
} from "../components/index";

function UserRouter() {
  return (
    <Switch>
      <Route path="/" component={MainPage} exact />
      <Route path="/login" component={Login} exact />
      <Route path="/sign-up" component={SignUp} exact />
      <Route path="/calender" component={Calender} exact />
      <Route path="/creators-info" component={CreatorsInfo} exact />
      <Route path="/club-info" component={ClubInfo} exact />
      <Route path="/company-info" component={CompanyInfo} exact />
    </Switch>
  );
}

export default UserRouter;
