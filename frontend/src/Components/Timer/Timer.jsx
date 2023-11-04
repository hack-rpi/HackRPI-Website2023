import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

const FULL_DASH_ARRAY = 407;
class Timer extends React.Component {
  constructor() {
    super();
    this.state = {
      time: new Date('Nov 5, 2023 12:00:00').getTime() - new Date().getTime(),
    };
    this.startTimer = this.startTimer.bind(this);
  }

  startTimer() {
    this.setState({
      time: new Date('Nov 5, 2023 12:00:00').getTime() - new Date().getTime(),
    });

    this.timer = setInterval(() => {
      const remainingTime =
        new Date('Nov 5, 2023 12:00:00').getTime() - new Date().getTime();
      this.setState({
        time: remainingTime,
      });

      this.setCircleDasharray(remainingTime);
    }, 1000);
  }

  setCircleDasharray(remainingTime) {
    const totalMilliseconds = 1000 * 60 * 60 * 24;
    const days = Math.floor(remainingTime / totalMilliseconds);
    const hours = Math.floor(
      (remainingTime % totalMilliseconds) / (1000 * 60 * 60),
    );
    const minutes = Math.floor(
      (remainingTime % (1000 * 60 * 60)) / (1000 * 60),
    );
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    const daysArray = `${((days / 30) * FULL_DASH_ARRAY).toFixed(0)} 407`;
    var circleElement = document.getElementById('daysTimer');
    if (circleElement) {
      circleElement.setAttribute('stroke-dasharray', daysArray);
    }

    const hoursArray = `${((hours / 24) * FULL_DASH_ARRAY).toFixed(0)} 407`;
    var circleElement = document.getElementById('hoursTimer');
    if (circleElement) {
      circleElement.setAttribute('stroke-dasharray', hoursArray);
    }

    const minutesArray = `${((minutes / 60) * FULL_DASH_ARRAY).toFixed(0)} 407`;
    var circleElement = document.getElementById('minutesTimer');
    if (circleElement) {
      circleElement.setAttribute('stroke-dasharray', minutesArray);
    }

    const secondsArray = `${((seconds / 60) * FULL_DASH_ARRAY).toFixed(0)} 407`;
    var circleElement = document.getElementById('secondsTimer');
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

  // Divides time left by the defined time limit.
  calculateTimeFraction() {
    return timeLeft / TIME_LIMIT;
  }

  // Update the dasharray value as time passes, starting with 283

  render() {
    return (
      <Container className="timer">
        <Col className="colStyle">
          <div className="groupStyle">
            <div className="contain">
              <div id="number">
                {Math.floor(this.state.time / (1000 * 60 * 60 * 24))}
              </div>

              <svg
                id="image"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                width="144px"
                height="144px"
								className='timerSvg'
              >
                <circle cx="72" cy="72" r="65" strokeLinecap="round" />
                <circle
                  cx="72"
                  cy="72"
                  r="65"
                  className="base-timer-path-remaining"
                  id="daysTimer"
                  strokeDasharray="90 380"
                />
              </svg>
            </div>
            <div className="labelStyle">DAYS</div>
          </div>

          <div className="groupStyle">
            <div className="contain">
              <div id="number">
                {Math.floor(
                  (this.state.time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
                )}
              </div>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                width="144px"
                height="144px"
								className='timerSvg'

              >
                <circle cx="72" cy="72" r="65" strokeLinecap="round" />
                <circle
                  cx="72"
                  cy="72"
                  r="65"
                  className="base-timer-path-remaining"
                  id="hoursTimer"
                  strokeDasharray="90 380"
                />
              </svg>
            </div>
            <div className="labelStyle">HOURS</div>
          </div>

          <div className="groupStyle">
            <div className="contain">
              <div id="number">
                {Math.floor((this.state.time % (1000 * 60 * 60)) / (1000 * 60))}
              </div>

              <svg
                id="image"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                width="144px"
                height="144px"
								className='timerSvg'

              >
                <circle cx="72" cy="72" r="65" strokeLinecap="round" />
                <circle
                  cx="72"
                  cy="72"
                  r="65"
                  className="base-timer-path-remaining"
                  id="minutesTimer"
                  strokeDasharray="90 380"
                />
              </svg>
            </div>
            <div className="labelStyle">MINUTES</div>
          </div>

          <div className="groupStyle">
            <div className="contain">
              <div id="number">
                {Math.floor((this.state.time % (1000 * 60)) / 1000)}
              </div>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                width="144px"
                height="144px"
								className='timerSvg'

              >
                <circle cx="72" cy="72" r="65" strokeLinecap="round" />
                <circle
                  cx="72"
                  cy="72"
                  r="65"
                  className="base-timer-path-remaining"
                  id="secondsTimer"
                  strokeDasharray="90 380"
                />
              </svg>
            </div>
            <div className="labelStyle">SECONDS</div>
          </div>
        </Col>
      </Container>
    );
  }
}

export default Timer;
