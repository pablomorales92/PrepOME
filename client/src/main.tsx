import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Set scroll behavior
document.documentElement.style.scrollBehavior = "smooth";

// Add font classes
document.documentElement.classList.add("font-montserrat", "font-open-sans");

createRoot(document.getElementById("root")!).render(<App />);
