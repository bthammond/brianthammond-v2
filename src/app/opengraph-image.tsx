import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Brian T. Hammond — Family Business Advisor & Entrepreneur Mentor";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background:
            "linear-gradient(135deg, #0a2440 0%, #14396e 60%, #1a4a85 100%)",
          color: "#ffffff",
          fontFamily: "Georgia, serif",
          position: "relative",
        }}
      >
        {/* Top — small eyebrow */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontSize: "20px",
            fontWeight: 700,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#c9a961",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          <div style={{ width: "48px", height: "2px", background: "#c9a961" }} />
          Family Business Advisor · Entrepreneur Mentor
        </div>

        {/* Middle — the big line */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: "0.25em",
              fontSize: "124px",
              fontWeight: 700,
              lineHeight: 1,
              letterSpacing: "-0.02em",
              color: "#ffffff",
            }}
          >
            <span>FAMILY</span>
            <span style={{ color: "rgba(255,255,255,0.7)", fontWeight: 400, fontStyle: "italic", fontSize: "96px" }}>by</span>
            <span style={{ color: "#c9a961" }}>DESIGN</span>
            <span>.</span>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "22px",
              color: "rgba(255,255,255,0.75)",
              fontFamily: "system-ui, sans-serif",
              maxWidth: "900px",
              lineHeight: 1.4,
            }}
          >
            FAMILY is what we build. The DESIGN Method is how we build it.
          </div>
        </div>

        {/* Bottom — name + URL */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontFamily: "system-ui, sans-serif",
            fontSize: "22px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontFamily: "Georgia, serif",
              fontSize: "36px",
              fontWeight: 600,
              letterSpacing: "-0.01em",
            }}
          >
            Brian T. Hammond
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              gap: "4px",
              color: "#c9a961",
              fontWeight: 600,
            }}
          >
            <div style={{ color: "rgba(255,255,255,0.6)", fontSize: "16px", letterSpacing: "0.1em", textTransform: "uppercase" }}>
              30+ years · MBA, LSU
            </div>
            <div style={{ fontSize: "22px" }}>brianthammond.com</div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
