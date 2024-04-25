import { useRef } from 'react'
import { GlobalCanvas, SmoothScrollbar, UseCanvas, ScrollScene, styles } from '@14islands/r3f-scroll-rig'

import logo from './logo.svg';
import './App.css';

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/


import { ScrollScene, UseCanvas, styles } from '@14islands/r3f-scroll-rig'

function Image({ src }) {
  const el = useRef()
  return (
    <>
      <img ref={el} className={styles.hiddenWhenSmooth} src={src} />
      <UseCanvas>
        <ScrollScene track={el}>
          {(props) => (
            <WebGLImage imgRef={el} {...props} />
          )}
        </ScrollScene>
      </UseCanvas>
    </>
  )
}

export default function App() {
  return (
    <>
      <!-- A position fixed canvas that covers the viewport -->
      <GlobalCanvas />
      <!-- This enables smooth scrolling with Lenis -->
      <SmoothScrollbar>
        {(bind) => (
          <ExampleComponent />
        )}
      </SmoothScrollbar>
    </>
  )
}

/* export default App; */





/*
export const HtmlComponent = () => (
  const el = useRef()
  return (
    <>
      <div ref={el}>Track me!</div>
      <UseCanvas>
        <ScrollScene track={el}>
          {(props) => (
            <mesh {...props}>
              <planeGeometry />
              <meshBasicMaterial color="turquoise" />
            </mesh>
          )}
        </ScrollScene>
      </UseCanvas>
    </>
  )
)



import { useRef, useEffect, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { GlobalCanvas, ScrollScene, UseCanvas, SmoothScrollbar } from '@14islands/r3f-scroll-rig'
import { MeshDistortMaterial, GradientTexture } from '@react-three/drei'

import Logo from './Logo'
import './styles.css'

export default function App() {
  const [isTouch, setTouch] = useState(false)
  useEffect(() => {
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0
    setTouch(isTouch)
  }, [])
  return (
    <>
      <GlobalCanvas style={{ pointerEvents: 'none' }}>
        <ambientLight />
      </GlobalCanvas>
      <SmoothScrollbar>
        {(bind) => (
          <article {...bind}>
            <header>
              <a href="https://github.com/14islands/r3f-scroll-rig">@14islands/r3f-scroll-rig</a>
            </header>
            <section>
              <h1>Basic &lt;ScrollScene/&gt; example</h1>
            </section>
            {isTouch && (
              <section>
                <p style={{ color: 'orange' }}>
                  You are on a touch device which means the WebGL won't sync with the native scroll. Consider disabling ScrollScenes for
                  touch devices, or experiment with the `smoothTouch` setting on Lenis.
                </p>
              </section>
            )}
            <ExampleComponent />
            <section>Both these ScrollScenes are tracking DOM elements and scaling their WebGL meshes to fit.</section>
            <SpinningBoxSection />
            <Logo />
          </article>
        )}
      </SmoothScrollbar>
    </>
  )
}

function ExampleComponent() {
  const el = useRef()
  return (
    <>
      <div ref={el} className="Placeholder ScrollScene"></div>
      <UseCanvas>
        <ScrollScene track={el}>
          {(props) => (
            <mesh {...props}>
              <planeGeometry args={[1, 1, 16, 16]} />
              <MeshDistortMaterial speed={5} distort={0.2}>
                <GradientTexture
                  stops={[0, 1]} // As many stops as you want
                  colors={['magenta', 'turquoise']} // Colors need to match the number of stops
                  rotation={0.5}
                />
              </MeshDistortMaterial>
            </mesh>
          )}
        </ScrollScene>
      </UseCanvas>
    </>
  )
}

function SpinningBoxSection() {
  const el = useRef()
  return (
    <section>
      <div ref={el} className="Placeholder ScrollScene"></div>
      <UseCanvas>
        <ScrollScene track={el}>{(props) => <SpinningBoxWebGL {...props} />}</ScrollScene>
      </UseCanvas>
    </section>
  )
}

function SpinningBoxWebGL({ scale, scrollState }) {
  const mesh = useRef()
  useFrame(() => {
    mesh.current.rotation.y = scrollState.progress * Math.PI * 2
  })
  return (
    <group scale={scale.xy.min() * 0.5}>
      <mesh ref={mesh}>
        <boxGeometry />
        <meshNormalMaterial />
      </mesh>
    </group>
  )
}
*/
