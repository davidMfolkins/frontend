import { useState, useEffect } from 'react';
import useStyles from './Styles'

function TrafficLight() {
  const classes = useStyles();
  const [greenLight, setGreenLight] = useState(classes.greenLight)
  const [yellowLight, setYellowLight] = useState(classes.lightOff)
  const [redLight, setRedLight] = useState(classes.lightOff)
  const [bgColor, setBgColor] = useState(classes.greenBg)
  const [color, setColor] = useState("green")
  const [trafficLight, setTrafficLight] = useState(classes.greenTrafficLight)

  useEffect(() => {
    const intervalHandle = setInterval(function () {
      if (greenLight === classes.greenLight) {
        setTimeout(function () {
          setYellowLight(classes.yellowLight)
          setBgColor(classes.yellowBg)
          setColor("yellow")
          setTrafficLight(classes.yellowTrafficLight)
          setGreenLight(classes.lightOff)
          setRedLight(classes.lightOff)
          return
        }, 4000);
      }

      if (yellowLight === classes.yellowLight) {
        setRedLight(classes.redLight)
        setBgColor(classes.redBg)
        setColor("red")
        setTrafficLight(classes.redTrafficLight)
        setYellowLight(classes.lightOff)
        setGreenLight(classes.lightOff)
        return
      }

      if (redLight === classes.redLight) {
        setTimeout(function () {
          setGreenLight(classes.greenLight)
          setBgColor(classes.greenBg)
          setColor("green")
          setTrafficLight(classes.greenTrafficLight)
          setYellowLight(classes.lightOff)
          setRedLight(classes.lightOff)
        }, 4000);
      }
    }, 4000);
    return function cleanup() {
      clearInterval(intervalHandle)
    }
  }, [
    greenLight,
    yellowLight,
    redLight,
    classes.lightOff,
    classes.greenBg,
    classes.yellowBg,
    classes.redBg,
    classes.greenLight,
    classes.redLight,
    classes.yellowLight,
    classes.greenTrafficLight,
    classes.redTrafficLight,
    classes.yellowTrafficLight
  ]);



  return (
    <div className={bgColor}>
      <div className={trafficLight}>
        <div className={classes.lights}>
          <div className={redLight}></div>
          <div className={yellowLight}></div>
          <div className={greenLight}></div>
        </div>
      </div>
      <div className={classes.text}>
        The light is {color}.
      </div>
    </div>
  );
}

export default TrafficLight;