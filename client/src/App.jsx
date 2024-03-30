import './App.css'
import SpaceScene from './components/canvas/SpaceScene'

function App() {

  return (
    <>
     <div className="relative w-screen h-screen">
      {/* Render the SpaceScene component as the background */}
      <SpaceScene />
    </div>
    </>
  )
}

export default App
