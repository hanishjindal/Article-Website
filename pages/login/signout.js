import { useRouter } from "next/router";
import { useEffect } from "react";

function signout() {
  useEffect(() => {
    localStorage.removeItem("user");
    const router = useRouter();
    router.push("/");
  }, []);

  return <></>;
}

export default signout;
