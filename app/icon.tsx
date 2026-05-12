import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

async function loadFont() {
  const css = await fetch(
    "https://fonts.googleapis.com/css2?family=Lilita+One&display=swap",
  ).then((r) => r.text());

  const match = css.match(/src: url\((.+?)\) format/);
  if (!match) throw new Error("Could not find font URL");

  return fetch(match[1]).then((r) => r.arrayBuffer());
}

export default async function Icon() {
  const font = await loadFont();

  return new ImageResponse(
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <span
        style={{
          fontFamily: "Lilita One",
          fontSize: 32,
          color: "#3ecf8e",
          lineHeight: 1,
        }}
      >
        p{"}"}
      </span>
    </div>,
    {
      ...size,
      fonts: [{ name: "Lilita One", data: font, style: "normal" }],
    },
  );
}
