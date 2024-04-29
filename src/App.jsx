import React, { Suspense, useRef, useState } from "react";
import { GlobalCanvas, SmoothScrollbar } from "@14islands/r3f-scroll-rig";
import { Environment, Loader } from "@react-three/drei";

import { BodyCopy, Headline, Subtitle } from "./Text";
import { Image } from "./Image";
import { ImageCube } from "./ImageCube";
import { WebGLBackground } from "./WebGLBackground";
import { Lens } from "./Lens";
import CodropsFrame from "./CodropsFrame";
import EffectsToggle from "./EffectsToggle";

import "@14islands/r3f-scroll-rig/css";

// Photos by <a href="https://unsplash.com/@maxberg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Maxim Berg</a> on <a href="https://unsplash.com/photos/u8maxDvbae8?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

export default function App() {
  const eventSource = useRef();
  const [enabled, setEnabled] = useState(true);

  return (
    // We attach events onparent div in order to get events on both canvas and DOM
    <div ref={eventSource}>
      <GlobalCanvas
        // shader errors are hidden by default which speeds up compilation
        debug={false}
        // scaleMultiplier is a scroll-rig setting to scale the entire scene
        scaleMultiplier={0.01}
        // All other props on the R3F Canvas is supported:
        eventSource={eventSource}
        eventPrefix="client"
        flat // disable toneMapping since we have editorial images
        camera={{ fov: 14 }}
        style={{ pointerEvents: "none", zIndex: -1 }}
      >
        {(globalChildren) => (
          <Lens>
            <WebGLBackground />
            <Suspense fallback="">
              {/* 
                Our materials use PBR ligting and requires an environment
              */}
              <Environment files="env/empty_warehouse_01_1k.hdr" />
              {globalChildren}
            </Suspense>
          </Lens>
        )}
      </GlobalCanvas>
      <SmoothScrollbar
        enabled={enabled}
        config={{ syncTouch: true }} // Lenis setting to force smooth scroll on touch devices
      />

      <header className="top-header">
        <span className="logo">MB/MH</span>
        <span className="info">Info</span>
      </header>

      <dialog className="intro center-flex">
          <span className="headline">Branding & Digital</span>
          <h1>MB/MH</h1>
      </dialog>

      <section className="container first-section">
          <Image
            src="images/colombe.jpg"
            className="IntroImage"
            parallaxSpeed={1.08}
          />
      </section>

      <article>
        <header className="container">
          <div className="headerLayout">
            <h2>
              <Headline wobble>We are a branding and digital centered creative studio based in Warsaw, working worldwide. </Headline>
            </h2>
          </div>
        </header>
        <footer>
          <CodropsFrame />
        </footer>
      </article>

      <Loader
        containerStyles={{
          background: "transparent",
          top: "auto",
          bottom: 0,
          height: "5px",
        }}
        innerStyles={{ background: "white", width: "100vw", height: "5px" }}
        barStyles={{ background: "#6e6bcd", height: "100%" }}
      />
    </div>
  );
}