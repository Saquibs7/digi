import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { LandingPage } from "./screens/LandingPage/LandingPage";
import { registerSW } from 'virtual:pwa-register';
import {initFirebaseMessagingSW} from "./sw-bootstrap"

initFirebaseMessagingSW();

const updateSW = registerSW({
  onRegistered(r: { update: () => void; }) {
    r && setInterval(() => r.update(), 60 * 60 * 1000);
  }
});

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <LandingPage />
  </StrictMode>,
);


