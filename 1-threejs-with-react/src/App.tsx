import AnimatedPanel from './components/Animated'

function App() {
  return (
        <div id="canvas-parent" style={{width:'100vw',height:'100vh'}}>
          <div className='info'>
            <h1>A simple project with treejs and OrbitControls</h1>
          </div>
          <AnimatedPanel/>
        </div>
  )
}

export default App
