import { ImageResponse } from "next/og";

// Генеруємо PNG-іконки для Google Search (SVG не підтримується в SERP)
export function generateImageMetadata() {
  return [
    { id: "48", size: { width: 48, height: 48 }, contentType: "image/png" },
    { id: "192", size: { width: 192, height: 192 }, contentType: "image/png" },
  ];
}

export default async function Icon({ id }: { id: Promise<string> }) {
  const iconId = await id;
  const size = iconId === "192" ? 192 : 48;
  const rx = iconId === "192" ? 36 : 9;

  return new ImageResponse(
    (
      <div
        style={{
          width: size,
          height: size,
          background: "#0a0a0f",
          borderRadius: rx,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Маршрутна лінія навігації */}
        <svg
          width={size * 0.75}
          height={size * 0.75}
          viewBox="0 0 32 32"
          fill="none"
        >
          <path
            d="M5 24 L10 20 L16 22 L22 18 L27 20"
            stroke="#f59e0b"
            strokeWidth={2.5}
            strokeLinecap="round"
          />
          <path d="M13 15 L15 14 L17 15 L17 18 L13 18 Z" fill="#f0f0f5" />
          <circle cx="5" cy="24" r="2.5" fill="#f59e0b" />
          <circle cx="27" cy="20" r="2.5" fill="#f59e0b" />
        </svg>
      </div>
    ),
    { width: size, height: size },
  );
}
