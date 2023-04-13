import { createRoot } from "react-dom/client";
import { App } from "src/components/App";

import "src/global.css";

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(<App />);
