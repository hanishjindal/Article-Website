import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const [user, setUser] = useState({ value: null });
  const [navKey, setNavKey] = useState(0);
  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setUser({ value: token });
      setNavKey(Math.random());
    } else {
      setUser({ value: null });
      setNavKey(Math.random());
    }
  }, [router.query]);

  return (
    <>
      <Navbar user={user} navKey={navKey} />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
