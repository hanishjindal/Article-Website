import { useEffect, useState } from "react";
import ArticleCard from "../Home/ArticleCard";
import { useRouter } from "next/router";

function dashboard() {
  const [token, setToken] = useState(true);
  const router = useRouter();
  useEffect(() => {
    const tkn = localStorage.getItem("token");
    if (!tkn) {
      router.push("/");
    } else {
      setToken(token);
    }
  }, [router.query]);
  return (
    <div>{token && <ArticleCard title="Your Articles" owner={true} />}</div>
  );
}

export default dashboard;
