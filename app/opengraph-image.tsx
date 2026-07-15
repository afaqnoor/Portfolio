import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/data";

export const alt = `${siteConfig.name} — ${siteConfig.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #020617 0%, #0f172a 60%, #1e1b4b 100%)",
          color: "#f8fafc",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 84,
            fontWeight: 700,
            background: "linear-gradient(90deg, #60a5fa, #a855f7)",
            backgroundClip: "text",
            color: "transparent",
            marginBottom: 24,
          }}
        >
          {siteConfig.name}
        </div>
        <div style={{ fontSize: 36, color: "#94a3b8" }}>{siteConfig.title}</div>
      </div>
    ),
    size
  );
}
