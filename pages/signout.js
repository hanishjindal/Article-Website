import { useRouter } from "next/router";
import { useEffect } from "react";

function signout() {
  const router = useRouter();
  useEffect(() => {
    localStorage.removeItem("token");
    router.push("/");
  }, []);

  return <></>;
}

export default signout;
