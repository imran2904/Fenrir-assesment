import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import "../styles/globals.css";
import BaseLayout from "@/components/Layout/BaseLayout";

export default function App({ Component, pageProps }) {
  const [theme, setTheme] = useState("light");
  const router = useRouter();

  useEffect(() => {
    const saved = localStorage.getItem("theme") || "light";
    setTheme(saved);
    if (saved === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
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