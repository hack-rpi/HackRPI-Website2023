import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Timer extends React.Component{
constructor(){
    super()
    this.state = {
      time: new Date("Nov 4, 2023 12:00:00").getTime()- new Date().getTime(),
    }
    this.startTimer = this.startTimer.bind(this)
  }
  startTimer() {
    this.setState({
      time: new Date("Nov 4, 2023 12:00:00").getTime()- new Date().getTime(),
    })
    this.timer = setInterval(() => this.setState({
      time: new Date("Nov 4, 2023 12:00:00").getTime()- new Date().getTime()
    }), 1);
  }
    render(){
        this.startTimer()
        return(
            <>
                <Container sticky="bottom" style={{ position: "fixed", bottom: "5px", left: "0px" , "zIndex":4000}}>
                    <Col>
                        <h2 class="text-white" style={{display:"inline-block", padding:"10px"}}>{Math.floor(this.state.time / (1000 * 60 * 60 * 24))}</h2>
                        <h2 class="text-white"  style={{display:"inline-block" , padding:"10px"}}>{Math.floor((this.state.time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))}</h2>
                        <h2 class="text-white"  style={{display:"inline-block" , padding:"10px"}}>{Math.floor((this.state.time % (1000 * 60 * 60)) / (1000 * 60))}</h2>
                        <h2 class="text-white" style={{display:"inline-block" , padding:"10px"}}>{Math.floor((this.state.time % (1000 * 60)) / 1000)}</h2>
                    </Col>
                </Container>
            </>
        )
    }
}

export default Timer
