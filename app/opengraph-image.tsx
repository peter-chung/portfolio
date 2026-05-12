import { ImageResponse } from "next/og"

export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

async function loadFont() {
  const css = await fetch(
    "https://fonts.googleapis.com/css2?family=Lilita+One&display=swap"
  ).then((r) => r.text())
  const match = css.match(/src: url\((.+?)\) format/)
  if (!match) throw new Error("Could not find font URL")
  return fetch(match[1]).then((r) => r.arrayBuffer())
}

export default async function Image() {
  const font = await loadFont()

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          background: "#0a0a0a",
          padding: "80px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontFamily: "Lilita One",
            fontSize: 96,
            lineHeight: 1,
            marginBottom: 16,
            gap: 20,
          }}
        >
          <span style={{ color: "#fff" }}>Peter</span>
          <span style={{ color: "#3ecf8e" }}>Chung</span>
        </div>
        <div
          style={{
            display: "flex",
            fontFamily: "Lilita One",
            fontSize: 36,
            letterSpacing: 6,
            marginBottom: 48,
            gap: 12,
          }}
        >
          <span style={{ color: "#888", textTransform: "uppercase" }}>Software</span>
          <span style={{ color: "#3ecf8e", textTransform: "uppercase" }}>Engineer</span>
        </div>
        <div
          style={{
            fontSize: 24,
            color: "#555",
            fontFamily: "sans-serif",
          }}
        >
          pchung.dev@gmail.com
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Lilita One", data: font, style: "normal" }],
    }
  )
}
