import {Component} from 'react'
import './index.css'

class StopWatch extends Component {
  state = {timeinSeconds: 0}

  onStartClicked = () => {
    this.timerId = setInterval(this.increaseTime, 1000)
  }

  increaseTime = () => {
    this.setState(prevState => ({
      timeinSeconds: prevState.timeinSeconds + 1,
    }))
  }

  onStopBtnClicked = () => {
    this.clearTimerInterval()
  }

  onResetBtnClicked = () => {
    this.setState({
      timeinSeconds: 0,
    })
  }

  clearTimerInterval = () => {
    clearInterval(this.timerId)
  }

  getFormattedStringTimeFromTimeInSeconds = () => {
    const {timeinSeconds} = this.state
    const minutes = Math.floor(timeinSeconds / 60)
    const secons = timeinSeconds % 60
    const stringFormattedMinutes = minutes < 9 ? `0${minutes}` : minutes
    const stringFormattedSeconds = secons < 9 ? `0${secons}` : secons
    const formattedTime = `${stringFormattedMinutes}:${stringFormattedSeconds}`
    return formattedTime
  }

  render() {
    const formattedTime = this.getFormattedStringTimeFromTimeInSeconds()
    return (
      <div className="app-container">
        <div className="box-container">
          <h1 className="heading">Stopwatch</h1>
          <div className="timer-container">
            <div className="image-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
                className="time-icon"
              />
              <p className="timer-text">Timer</p>
            </div>
            <h1 className="time">{formattedTime}</h1>
            <div className="buttons-container">
              <button
                type="button"
                className="button green-color-btn"
                onClick={this.onStartClicked}
              >
                Start
              </button>
              <button
                type="button"
                className="button red-color-btn"
                onClick={this.onStopBtnClicked}
              >
                Stop
              </button>
              <button
                type="button"
                className="button orange-color-btn"
                onClick={this.onResetBtnClicked}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default StopWatch
