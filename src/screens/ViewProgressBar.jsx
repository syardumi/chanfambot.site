import React, { useEffect } from "react";
import { ProgressBar, Button, Nav, Navbar, Container, Row, Col } from 'react-bootstrap';

function ViewProgressBar(props) {
  const progressCurrent = props.customInputs.currentProgress
  const progressMax = props.customInputs.maxProgress
  const progressPercent = (progressCurrent / progressMax) * 100
  const progressLabel = progressPercent >= 10 ? `${props.customInputs.prefix}${progressCurrent.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}` : ''

  useEffect(() => {
    setInterval(() => {
      window.location.reload(false);
    }, 5000)
  }, [])

  return (
    <div className="ViewProgressBar">
      { props.customInputs.showHeader &&
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>Progress Bar</Navbar.Brand>
            <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href="/progress-bar/set">Set Values</Nav.Link></Nav.Item>
          </Container>
        </Navbar>
      }
      <Container>
        <h1>{props.customInputs.navTitle}</h1>
        {progressPercent < 10 && <label className="progressCurrent" style={{color: props.customInputs.currentColor}}>{props.customInputs.prefix}{progressCurrent.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</label>}
        {progressPercent >= 10 }
        <Row>
          <Col>
            <ProgressBar style={{
              '--progress-bar-height': props.customInputs.barHeight,
              '--progress-bar-color': props.customInputs.barColor,
              '--progress-current-color': props.customInputs.currentColor
            }} now={progressPercent} label={progressLabel} />
          </Col>
          <Col xs={1} style={{display: 'flex', alignItems: 'center'}}>
            <label className="progressMax" style={{flex: 1, color: props.customInputs.maxColor}}>{props.customInputs.prefix}{progressMax.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</label>
          </Col>
        </Row>
        <Button className="toggleNavButton" onClick={() => {
          props.setCustomInputs({...props.customInputs, ...{
            showHeader: !props.customInputs.showHeader
          }})
        }}>Toggle Header</Button>
      </Container>
    </div>
  )
}

export { ViewProgressBar };
