import React, { useState, useEffect } from "react";
import { Alert, Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Header } from '../components'
import { SketchPicker } from 'react-color';

function SetProgressBar(props) {
  const [tmpNavTitle, setTmpNavTitle] = useState(props.customInputs.navTitle)
  const [tmpCurrentProgress, setTmpCurrentProgress] = useState(props.customInputs.currentProgress)
  const [tmpMaxProgress, setTmpMaxProgress] = useState(props.customInputs.maxProgress)
  const [tmpBarColor, setTmpBarColor] = useState(props.customInputs.barColor)
  const [tmpCurrentColor, setTmpCurrentColor] = useState(props.customInputs.currentColor)
  const [tmpMaxColor, setTmpMaxColor] = useState(props.customInputs.maxColor)
  const [tmpPrefix, setTmpPrefix] = useState(props.customInputs.prefix)
  const [tmpBarHeight, setTmpBarHeight] = useState(props.customInputs.barHeight)

  const [showAlert, setShowAlert] = useState(false)

  useEffect(() => {
    setTmpNavTitle(props.customInputs.navTitle)
  }, [props.customInputs.navTitle])

  return (
    <div className="SetProgressBar">
      <Header />
      <Container>
        <Alert show={showAlert} variant="success">
          <Alert.Heading>Saved!</Alert.Heading>
        </Alert>
        <Form>
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>NavBar Title</Form.Label>
                <Form.Control
                  placeholder="Progress Bar"
                  value={tmpNavTitle}
                  onChange={(evt) => {
                    setTmpNavTitle(evt.target.value)
                  }}
                />
              </Form.Group>
            </Col>
            <Col xs={2}>
              <Form.Group className="mb-3">
                <Form.Label>Prefix</Form.Label>
                <Form.Control
                  placeholder="$"
                  value={tmpPrefix}
                  onChange={(evt) => {
                    setTmpPrefix(evt.target.value)
                  }}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Current Progress</Form.Label>
                  <Form.Control
                    placeholder="0"
                    value={tmpCurrentProgress}
                    onChange={(evt) => {
                      setTmpCurrentProgress(evt.target.value)
                    }}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Current Value Color</Form.Label>
                  <SketchPicker
                    color={tmpCurrentColor}
                    onChangeComplete={(color) => {
                      setTmpCurrentColor(color.hex)
                    }}
                  />
                </Form.Group>
            </Col>
            <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Max Progress</Form.Label>
                  <Form.Control
                    placeholder="0"
                    value={tmpMaxProgress}
                    onChange={(evt) => {
                      setTmpMaxProgress(evt.target.value)
                    }}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Max Value Color</Form.Label>
                  <SketchPicker
                    color={tmpMaxColor}
                    onChangeComplete={(color) => {
                      setTmpMaxColor(color.hex)
                    }}
                  />
                </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Bar Height</Form.Label>
                <Form.Control
                  placeholder="4em"
                  value={tmpBarHeight}
                  onChange={(evt) => {
                    setTmpBarHeight(evt.target.value)
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Bar Color</Form.Label>
                <SketchPicker
                  color={tmpBarColor}
                  onChangeComplete={(color) => {
                    setTmpBarColor(color.hex)
                  }}
                />
              </Form.Group>
            </Col>
          </Row>
          <Button onClick={() => {
            props.setCustomInputs({...props.customInputs, ...{
              navTitle: tmpNavTitle,
              currentProgress: tmpCurrentProgress,
              maxProgress: tmpMaxProgress,
              barColor: tmpBarColor,
              currentColor: tmpCurrentColor,
              maxColor: tmpMaxColor,
              prefix: tmpPrefix,
              barHeight: tmpBarHeight
            }})
            setShowAlert(true)
            setTimeout(() => {
              setShowAlert(false)
            }, 2000)
          }}>Save</Button>
        </Form>
      </Container>
    </div>
  )
}

export { SetProgressBar };
