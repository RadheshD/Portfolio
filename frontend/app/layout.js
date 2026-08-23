import "./globals.css";
import "./overflow.css";
import "./whimsy.css";
import "./review-fixes.css";
import "./home-simplify.css";
import "./toolkit-upgrade.css";
import "./post-hero.css";
import { SiteHeader, SiteFooter } from "./components";

export const metadata = { title: "Radhesh Dahagam | AI/ML Engineer", description: "Radhesh Dahagam builds curious, production-ready AI/ML systems." };

export default function RootLayout({ children }) {
  return <html lang="en"><body><SiteHeader />{children}<SiteFooter /></body></html>;
}
