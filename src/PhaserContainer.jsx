import { useEffect } from "react";
import { Link } from "react-router-dom";
export default function PhaserContainer() {
  console.log("mounted");
  useEffect(() => {
    const head = document.querySelector("head");
    const script = document.createElement("script");

    script.setAttribute("src", "../public/PhaserGame.js");
    script.setAttribute("type", "module");
    head.appendChild(script);

    return () => {
      window.location.reload(false);
      const phaserCanvas = document.querySelector("canvas");
      if (phaserCanvas) {
        phaserCanvas.parentNode.removeChild(phaserCanvas);
      }

      console.log("unmounted");
      head.removeChild(script);
    };
  }, []);

  return (
    <div>
      <Link to="/home">Go Home</Link>
    </div>
  );
}
