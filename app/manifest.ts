import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Marek Tonder - Portfolio",
    short_name: "Marek Tonder - Portfolio",
    description: "Marek Tonder - Portfolio",
    start_url: "/",
    display: "standalone",
    background_color: "#0f172a",
    theme_color: "#0f172a",
    icons: [
      {
        src: "favicons/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/x-icon",
      },
      {
        src: "favicons/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/x-icon",
      },
      {
        src: "favicons/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/x-icon",
      },
      {
        src: "favicons/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
