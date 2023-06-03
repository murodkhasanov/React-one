import './App.css'
import Index from './Index.jsx'

function App() {
  return (
    <div className='App'>
      <div className='name1'>
        <button><span>Frontent Mentor</span> <br/> <br />
        <p>Feedbek Board</p></button> 
      </div>
      <div className='name2'>
      <button><h4><p>All</p></h4></button>
      <button><h4>UI</h4></button>
      <button><h4>UXX</h4></button>
      <button><h4>Enxansement</h4></button>
      <button><h4>Bug</h4></button>
      <button><h4>Future</h4></button>
      </div>
      <div className='name3'>
        <h2>Road Map</h2>
        <span>Planned</span><br />
        <span>In-Proggres</span><br />
        <span>Live</span>
      </div>
      <Index />
    </div>
  )
}

export default App
