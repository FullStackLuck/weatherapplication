import './App.css';
import Description from './components/Descriptions';
import cold from './photos/cold.jpeg';
import warm from './photos/warm.png';
function App() {
  return (
     <div className='app' style={{backgroundImage: `url(${cold})`}}>
     <div className = 'overlay'>
      <div className='container'>
        <div className='section section__inputs'>
          <input type= "text" name="city" placeholder="Enter City.."/>
          <button>°F</button>
        </div>
        <div className='section section_temperature'>
          <div className='icon'>
            <h3>
              London, GB
              {/* <img src='' alt='weatherIcon'></img> */}
            </h3>
            <h3>
              Cloudy
            </h3>
            <div className='temperature'>
              <h1> 34 °C</h1>
            </div>
          </div>
          {/* bottom description */}
          <Description/>
        </div>
      </div>
     </div>

      </div>
  );
}

export default App;
