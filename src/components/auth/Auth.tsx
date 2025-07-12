"use client";

import React, { useState } from "react";
import { AuthForm } from "./AuthForm";

const AuthComponent = () => {
  const [type, setType] = useState("login");

  return (
    <div className="w-full py-16 min-h-[80vh] flex justify-center items-center max-w-sm mx-auto">
      <AuthForm type={type} setType={setType} />
    </div>
  );
};

export default AuthComponent;
