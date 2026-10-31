import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const alt = `${profile.name} | ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Social preview card shown when the site link is shared on LinkedIn, Slack, email, etc.
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "linear-gradient(135deg, #09090b 0%, #111827 60%, #1e1b4b 100%)",
          color: "#f4f4f5",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 28, color: "#60a5fa", letterSpacing: 2 }}>SOFTWARE ENGINEER</div>
        <div style={{ fontSize: 76, fontWeight: 800, marginTop: 16, lineHeight: 1.1 }}>{profile.name}</div>
        <div style={{ fontSize: 32, color: "#a1a1aa", marginTop: 28, maxWidth: 960, lineHeight: 1.4 }}>
          Full-stack · React · Next.js · TypeScript · Node.js · Python · AWS · Google Cloud
        </div>
        <div style={{ display: "flex", marginTop: 48, fontSize: 26, color: "#a78bfa" }}>
          github.com/udaykusam
        </div>
      </div>
    ),
    size,
  );
}
