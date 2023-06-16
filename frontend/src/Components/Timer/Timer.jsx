import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

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
    this.timer = setInterval(
      () =>
        this.setState({
          time:
            new Date('Nov 4, 2023 12:00:00').getTime() - new Date().getTime(),
        }),
      1,
    );
  }
  componentDidMount() {
    this.startTimer();
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    const circleStyle = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '10px',
      margin: '10px',
      border: '5px solid rgb(150, 0, 0)',
      borderRadius: '50%',
      width: '70px',
      height: '70px',
      fontSize: '1.5em',
    };

    const labelStyle = {
      textAlign: 'center',
      color: 'white',
    };

    const groupStyle = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    };

    const colStyle = {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    };

    return (
      <Container
        sticky="bottom"
        style={{ position: 'fixed', bottom: '5px', left: '0px', zIndex: 4000 }}
      >
        <Col style={colStyle}>
          <div style={groupStyle}>
            <div style={circleStyle} className="text-white">
              {Math.floor(this.state.time / (1000 * 60 * 60 * 24))}
            </div>
            <div style={labelStyle}>Days</div>
          </div>
          <div style={groupStyle}>
            <div style={circleStyle} className="text-white">
              {Math.floor(
                (this.state.time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
              )}
            </div>
            <div style={labelStyle}>Hours</div>
          </div>
          <div style={groupStyle}>
            <div style={circleStyle} className="text-white">
              {Math.floor((this.state.time % (1000 * 60 * 60)) / (1000 * 60))}
            </div>
            <div style={labelStyle}>Minutes</div>
          </div>
          <div style={groupStyle}>
            <div style={circleStyle} className="text-white">
              {Math.floor((this.state.time % (1000 * 60)) / 1000)}
            </div>
            <div style={labelStyle}>Seconds</div>
          </div>
        </Col>
      </Container>
    );
  }
}

export default Timer;
