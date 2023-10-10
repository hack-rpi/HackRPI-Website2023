import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

const FULL_DASH_ARRAY = 283;
// needs serious revious
class Timer extends React.Component {

  constructor() {
    super();
    this.state = {
      time: new Date('Nov 4, 2023 12:00:00').getTime() - new Date().getTime(),
    };
    this.startTimer = this.startTimer.bind(this);
  }

  startTimer() {
    this.setState({
      time: new Date('Nov 4, 2023 12:00:00').getTime() - new Date().getTime(),
    });

    this.timer = setInterval(() => {  
      const remainingTime = new Date('Nov 4, 2023 12:00:00').getTime() - new Date().getTime();
      this.setState({
          time: remainingTime,
      });

      this.setCircleDasharray(remainingTime);
    
    }, 1000);
  }

  setCircleDasharray() {
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    const secondsArray = `${(
      (seconds/60) * FULL_DASH_ARRAY).toFixed(0)} 283`;

    const circleElement = document.getElementById('base-timer-path-remaining');
    if (circleElement) {
      circleElement.setAttribute('stroke-dasharray', secondsArray);
    }
  }

  componentDidMount() {
    this.startTimer();
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  // updateCountdownBars(remainingTime) {
  //   const daysCircle = document.getElementById('days-circle');
  //   const hoursCircle = document.getElementById('hours-circle');
  //   const minutesCircle = document.getElementById('minutes-circle');
  //   const secondsCircle = document.getElementById('seconds-circle');

  //   const totalMilliseconds = 1000 * 60 * 60 * 24;
  //   const days = Math.floor(remainingTime / totalMilliseconds);
  //   const hours = Math.floor((remainingTime % totalMilliseconds) / (1000 * 60 * 60));
  //   const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  //   const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

  //   // Update the styles of the circular countdown bars
  //   const daysRotation = (360 * (days % 30)) / 30;
  //   const hoursRotation = (360 * (hours % 24)) / 24;
  //   const minutesRotation = (360 * (minutes % 60)) / 60;
  //   const secondsRotation = (360 * (seconds % 60)) / 60;

  //   daysCircle.style.transform = `rotate(${daysRotation}deg)`;
  //   hoursCircle.style.transform = `rotate(${hoursRotation}deg)`;
  //   minutesCircle.style.transform = `rotate(${minutesRotation}deg)`;
  //   secondsCircle.style.transform = `rotate(${secondsRotation}deg)`;
  // }


  // Divides time left by the defined time limit.
  calculateTimeFraction() {
    return timeLeft / TIME_LIMIT;
  }
    
// Update the dasharray value as time passes, starting with 283


  render() {


    return (
      <Container className='timer' >

        <div className='contain'>
          <div className='outerCircle'>
            <div className='innerCircle'>

              <div id="number"> 
               {Math.floor((this.state.time % (1000 * 60)) / 1000)}
              </div>

            </div>
          </div>

          <svg xmlns='http://www.w3.org/2000/svg' version='1.1' width="10vw" height="10vw" >
            <circle cx="72" cy="72" r="60.75" stroke-linecap="round"/>
            <circle cx="72" cy="72" r="60.75" id='base-timer-path-remaining' strokeDasharray="90 480"/>
          </svg>
        </div>

        {/* <Col className='colStyle'>

          <div className='groupStyle'>

                <div className='outerCicle'>
                  <div className='innterCircle'>
                    nn
                  </div>
                </div>

            </div>



          <div className='groupStyle'>
            <div className='circleStyle' >

              <div className='outerCicle'>
                <div className='innterCircle'>

                </div>
              </div>

              {Math.floor(this.state.time / (1000 * 60 * 60 * 24))}
            </div>
            <div className='labelStyle'>DAYS</div>
          </div>

          <div className='groupStyle'>
            <div className='circleStyle' >
              {Math.floor(
                (this.state.time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
              )}
            </div>
            <div className='labelStyle'>HOURS</div>
          </div>

          <div className='groupStyle'>
            <div className='circleStyle' >
              {Math.floor((this.state.time % (1000 * 60 * 60)) / (1000 * 60))}
            </div>
            <div className='labelStyle'>MINUTES</div>
          </div>

          <div className='groupStyle'>
            <div className='circleStyle' >
              {Math.floor((this.state.time % (1000 * 60)) / 1000)}
            </div>
            <div className='labelStyle'>SECONDS</div>
          </div>

        </Col> */}

      </Container>
    );
  }
}

export default Timer;
