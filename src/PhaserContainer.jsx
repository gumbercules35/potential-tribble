import { useEffect } from "react";
import { Link } from "react-router-dom";
export default function PhaserContainer() {
  console.log("mounted");
  useEffect(() => {
    const head = document.querySelector("head");
    const script = document.createElement("script");

    script.setAttribute("src", "../public/main.js");
    script.setAttribute("type", "module");
    head.appendChild(script);

    return () => {
      console.log("unmounted");

      window.location.reload(false);
    };
  }, []);

  return (
    <div>
      <Link to="/">Go Home</Link>
    </div>
  );
}
