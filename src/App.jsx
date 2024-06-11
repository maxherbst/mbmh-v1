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
          <span className="mbmh">MB/MH</span>
          <div style={{visibility: 'hidden'}} className="info"><a href="../en">EN</a> / <a href="../it">IT</a> / <a href="../es">ES</a> / <a href="../fr">FR</a></div>
        </header>
        <dialog className="intro center-flex">
          <span className="headline">Branding i digital</span>
          <h1><img src="images/logo.svg"/></h1>
        </dialog>
        <main>
          <div className="slider slider-mobile">
            <div className="slide">
              <img className="lazy" data-flickity-lazyload="images/COLOMBE_Mobile.jpg" />
              <h2 className="slide-title"><span>1 — Colombe </span><span className="scope">Zakres: Web design i kod</span></h2>
            </div>
            <div className="slide">
              <img className="lazy" data-flickity-lazyload="images/PAVILION_Mobilea.jpg" />
              <h2 className="slide-title"><span>2 — Polski Pawilon w Wenecji </span><span className="scope">Zakres: Logo, Web design i kod</span></h2>
            </div>
            <div className="slide">
              <img className="lazy" data-flickity-lazyload="images/YAS_Mobile.jpg" />
              <h2 className="slide-title"><span>3 — Young Art Store </span><span className="scope">Zakres: Web design i kod</span></h2>
            </div>
            <div className="slide">
              <img className="lazy" data-flickity-lazyload="images/M_Zachety_Mobile.jpg" />
              <h2 className="slide-title"><span>4 — Zacheta Online Magazine </span><span className="scope">Zakres: Web design i kod</span></h2>
            </div>
          </div>
          <div className="slider slider-1440">
            <div className="slide">
              <img className="lazy" data-flickity-lazyload="images/COLOMBE_1440.jpg" />
              <h2 className="slide-title"><span>1 — Colombe </span><span className="scope">Zakres: Web design i kod</span></h2>
            </div>
            <div className="slide">
              <img className="lazy" data-flickity-lazyload="images/PAVILION_1440a.jpg" />
              <h2 className="slide-title"><span>2 — Polski Pawilon w Wenecji </span><span className="scope">Zakres: Logo, Web design i kod</span></h2>
            </div>
            <div className="slide">
              <img className="lazy" data-flickity-lazyload="images/YAS_1440.jpg" />
              <h2 className="slide-title"><span>3 — Young Art Store </span><span className="scope">Zakres: Web design i kod</span></h2>
            </div>
            <div className="slide">
              <img className="lazy" data-flickity-lazyload="images/M_Zachety_1440.jpg" />
              <h2 className="slide-title"><span>4 — Zacheta Online Magazine </span><span className="scope">Zakres: Web design i kod</span></h2>
            </div>
          </div>
          <div className="slider slider-2560">
            <div className="slide">
              <img className="lazy" data-flickity-lazyload="images/COLOMBE_2560.jpg" />
              <h2 className="slide-title"><span>1 — Colombe </span><span className="scope">Zakres: Web design i kod</span></h2>
            </div>
            <div className="slide">
              <img className="lazy" data-flickity-lazyload="images/PAVILION_2560.jpg" />
              <h2 className="slide-title"><span>2 — Polski Pawilon w Wenecji </span><span className="scope">Zakres: Logo, Web design i kod</span></h2>
            </div>
            <div className="slide">
              <img className="lazy" data-flickity-lazyload="images/YAS_2560.jpg" />
              <h2 className="slide-title"><span>3 — Young Art Store </span><span className="scope">Zakres: Web design i kod</span></h2>
            </div>
            <div className="slide">
              <img className="lazy" data-flickity-lazyload="images/M_Zachety_2560.jpg" />
              <h2 className="slide-title"><span>4 — Zacheta Online Magazine </span><span className="scope">Zakres: Web design i kod</span></h2>
            </div>
          </div>

          <div id="info" className="container">
            <div className="row">
              <div className="col col-2">
                {'\n'}
              </div>
              <div className="col col-4 lead-text">
                <h2><Headline wobble>Jesteśmy studiem kreatywnym specjalizującym się w brandingu i&nbsp;digitalu, z siedzibą w&nbsp;Warszawie i&nbsp;działającym na całym świecie.</Headline></h2>
              </div>
              <div className="col col-1 m-disappear">
                {'\n'}
              </div>
              <div className="col col-1 m-full-w">
                <h3>Klienci</h3>
              </div>
              <div className="col col-2 add_margin m-50-w">
                <h4>Kultura / Publiczne</h4>
                <p><BodyCopy>
                  Galeria Narodowa Zachęta{'\n'}
                  Muzeum Warszawy{'\n'}
                  Sinfonia Varsovia{'\n'}
                  Miasto Carloforte, Sardynia{'\n'}
                  Fuorimargine, Sardynia{'\n'}{'\n'}
                </BodyCopy></p>
                <h4>Architektura</h4>
                <p><BodyCopy>
                  DMBA Architekci{'\n'}
                  James Grayley{'\n'}
                  Octopi{'\n'}
                  Whittaker Parsons{'\n'}
                  Haptic Architekci{'\n'}{'\n'}
                </BodyCopy></p>
                <h4>Styl</h4>
                <p><BodyCopy>Magazyn AuRevoir</BodyCopy></p>
              </div>
              <div className="col col-2  m-50-w">
                <h4>E-commerce / Komercyjne</h4>
                <p><BodyCopy>Przywara-Strzałka{'\n'}
                  Farrah Floyd{'\n'}
                  Ensemble{'\n'}
                Bumblebee{'\n'}{'\n'}</BodyCopy></p>
                <h4>Filmowe</h4>
                <p><BodyCopy>Polish Directors Guild{'\n'}
                  Match & Spark{'\n'}
                Shipsboy{'\n'}{'\n'}</BodyCopy></p>
                <h4>Osobowości</h4>
                <p><BodyCopy>David Ryle{'\n'}
                Leszek Możdżer{'\n'}
                Melody Gudzowaty{'\n'}{'\n'}</BodyCopy></p>
              </div>
              <div className="col col-1 m-disappear">
                {'\n'}
              </div>
              <div className="col col-1 m-full-w">
                <h3>Współprace</h3>
              </div>
              <div className="col col-2 add_margin m-50-w">
                <p><BodyCopy>Pentagram (UK){'\n'}
                  Bob Design (UK){'\n'}
                  Subtitle (Italy){'\n'}
                  Any Other Name (UK){'\n'}
                  Design by ST (UK){'\n'}
                  Worship (Canada){'\n'}
                Soft Power (UK)</BodyCopy></p>
              </div>
              <div className="col col-1 m-50-w only-mobile">
                <h3>Nasze usługi</h3>
              </div>
              <div className="col col-2 m-50-w only-mobile">
                <p><BodyCopy>Branding{'\n'}
                  Web design{'\n'}
                  Programowanie{'\n'}
                  Ilustracje{'\n'}
                  Motion / Tytuły filmów{'\n'}
                  Wideo / Fotografie{'\n'}
                  Wizualizacje 3D
                </BodyCopy></p>
              </div>
              <div className="col col-2 contact-block m-50-w">
                <h3>Kontakt</h3>
                <div className="mail-holder">
                  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                  viewBox="0 0 46 31" style={{enableBackground: 'new 0 0 46 31'}} xmlSpace="preserve">
                  <g>
                    <defs>
                    <rect id="SVGID_1_" x="3.71" y="3.271" width="38.58" height="24.459"/>
                    </defs>
                    <clipPath id="SVGID_00000133513892806479193640000012631447880184117664_">
                    <use xlinkHref="#SVGID_1_"  style={{overflow: 'visible'}} />
                    </clipPath>
                    <rect x="4.433" y="3.993" style={{clipPath:'url(#SVGID_00000133513892806479193640000012631447880184117664_)', fill: 'none', stroke: '#000000', strokeWidth:1.446}} width="37.134" height="23.014"/>
                    <polyline style={{clipPath:'url(#SVGID_00000133513892806479193640000012631447880184117664_)', fill: 'none', stroke: '#000000', 'strokeWidth': 1.446}} points="
                      4.15,4.891 22.948,15.37 41.746,4.891  "/>
                    </g>
                  </svg>
                </div>
                <p>Napisz do nas lub po prostu się przywitaj tutaj:
                  <a href="mailto:hello@mbmh.pl">hello@mbmh.pl</a>{'\n'}
                </p>
              </div>
              <div className="col col-1 m-disappear">
                {'\n'}
              </div>
              <div className="col col-1 m-50-w m-disappear">
                <h3>Nasze usługi</h3>
              </div>
              <div className="col col-2 m-50-w m-disappear">
                <p><BodyCopy>Branding{'\n'}
                  Web design{'\n'}
                  Programowanie{'\n'}
                  Ilustracje{'\n'}
                  Motion / Tytuły filmów{'\n'}
                  Wideo / Fotografie{'\n'}
                  Wizualizacje 3D
                </BodyCopy></p>
              </div>
              </div> {/* ROW */}
            </div> {/* INFO */}
        </main>
        <footer>
          <div className="container">
            <p><BodyCopy>MB/MH 2024</BodyCopy></p>
          </div>
        </footer>
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