import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import type { Route } from "./+types/mainLayout";
import ExampleNavigationMenu from "./BaseNavbar";
import FloatingContact from "./FloatingButton";

export function meta({ }: Route.MetaArgs) {
  const title = "YindeeClean | Condo & House Cleaning Service";
  const description =
    "YindeeClean provides condo and house cleaning services with trained professionals, consistent standards, and attention to detail. Enjoy a clean, calm, and comfortable living space.";
  const url = "https://yindeeclean.com";
  const image = "https://yindeeclean.com/og-image.jpg";

  return [
    { title },

    // SEO
    {
      name: "description",
      content: description,
    },
    {
      name: "keywords",
      content:
        "cleaning service, condo cleaning, house cleaning, home cleaning, deep cleaning, cleaning service Bangkok, house cleaning Thailand",
    },

    // Open Graph
    {
      property: "og:title",
      content: title,
    },
    {
      property: "og:description",
      content: description,
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:url",
      content: url,
    },
    {
      property: "og:image",
      content: image,
    },

    // Twitter
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: title,
    },
    {
      name: "twitter:description",
      content: description,
    },
    {
      name: "twitter:image",
      content: image,
    },
  ];
}

export default function MainLayout() {
  return (
    
        <main className="grid">
          {/* <ExampleNavigationMenu /> */}
          <FloatingContact />
          <Navbar />
          <Outlet />
          <Footer />
        </main>
    
  )
}
