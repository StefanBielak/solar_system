import './Mercury.module.scss';
import overview_icon from '../../assets/planet-mercury.svg';
import internal_icon from '../../assets/planet-mercury-internal.svg';
import geology_icon from '../../assets/geology-mercury.png';
import source_icon from '../../assets/icon-source.svg';

function Mercury() {
    return (
      <div>
        <div>
          <div>
            <button>01 Overview</button>
            <button>02 Internal Structure</button>
            <button>03 Surface Geology</button>
          </div>
          <img src={overview_icon} alt="overview_icon" />
          <div>
            <h1>Mercury</h1>
            <p>
              Mercury is the smallest planet in the Solar System and the closest
              to the Sun. Its orbit around the Sun takes 87.97 Earth days, the
              shortest of all the Sun's planets. Mercury is one of four
              terrestrial planets in the Solar System, and is a rocky body like
              Earth.
            </p>
            <div>
              <p>Source</p>
              <p>Wikipedia</p>
              <img src={source_icon} alt="source_icon" />
            </div>
            <div>
              <button>01 Overview</button>
              <button>02 Internal Structure</button>
              <button>03 Surface Geology</button>
            </div>
          </div>
        </div>
        <div>
          <div>
            <p>Rotattion time</p>
            <h2>58.6 days</h2>
          </div>
          <div>
            <p>Revoluttion time</p>
            <h2>87.97 days</h2>
          </div>
          <div>
            <p>Radius</p>
            <h2>2,439.7 km</h2>
          </div>
          <div>
            <p>Average temp</p>
            <h2>430°c</h2>
          </div>
        </div>
      </div>
    );
}

export default Mercury;