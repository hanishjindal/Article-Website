import { useRouter } from "next/router";
import React from "react";

function signout() {
  localStorage.removeItem("user");
  const router = useRouter();
  router.push("/");
  return <></>;
}

export default signout;
