import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import "../styles/globals.css";
import BaseLayout from "@/components/Layout/BaseLayout";

export default function App({ Component, pageProps }) {
  const [theme, setTheme] = useState("light");
  const router = useRouter();

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) {
      setTheme(saved);
      document.documentElement.classList.toggle(
        "dark",
        saved === "dark"
      );
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle(
      "dark",
      newTheme === "dark"
    );
  };

  const noLayoutRoutes = ["/"]; 

  if (noLayoutRoutes.includes(router.pathname)) {
    return <Component {...pageProps} />;
  }

  return (
    <BaseLayout theme={theme} toggleTheme={toggleTheme}>
      <Component {...pageProps} />
    </BaseLayout>
  );
}