import './App.css'
import SpaceScene from './components/canvas/SpaceScene'
import AboutMe from './components/AboutMe'

function App() {

  return (
    <>
     <div className="relative w-screen h-screen">
      {/* Render the SpaceScene component as the background */}
      
      <SpaceScene />
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-10">
        <AboutMe />
      </div>
    </div>
    </>
  )
}

export default App
