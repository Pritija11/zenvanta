import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Zenvanta — Continuous Compliance Automation";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logoData = await readFile(join(process.cwd(), "public", "logo.png"));
  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

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
          background: "#fbfbfb",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            background:
              "radial-gradient(circle at 20% 20%, rgba(15,208,130,0.18), transparent 55%), radial-gradient(circle at 85% 80%, rgba(59,164,234,0.12), transparent 55%)",
          }}
        />
        <img
          src={logoSrc}
          alt=""
          width={120}
          height={120}
          style={{ position: "relative" }}
        />
        <div
          style={{
            position: "relative",
            marginTop: 28,
            fontSize: 58,
            fontWeight: 600,
            letterSpacing: "-0.01em",
            color: "#091922",
          }}
        >
          Zenvanta
        </div>
        <div
          style={{
            position: "relative",
            marginTop: 16,
            fontSize: 24,
            color: "#4f6177",
          }}
        >
          Continuous compliance automation
        </div>
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            height: 6,
            background: "#0fd082",
          }}
        />
      </div>
    ),
    { ...size },
  );
}

export const dynamic = "force-static";
