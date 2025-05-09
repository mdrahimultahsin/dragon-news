import React, {use} from "react";
import SocialLogin from "../SocialLogin";
import FindUs from "./FindUs";
import QZone from "./QZone";
import {AuthContext} from "../../provider/Context";

const RightAside = () => {
  const {user} = use(AuthContext);
  return (
    <div>
      {user?"": <SocialLogin></SocialLogin>}

      <section className="mt-4">
        <FindUs></FindUs>
      </section>
      <section>
        <QZone></QZone>
      </section>
    </div>
  );
};

export default RightAside;
