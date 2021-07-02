import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  greenBg: {
    backgroundColor: "#acffa1",
    height: "1000px",
    color: "green",
    display: "flex",
    alignItems: "center",
    flexDirection: "column"
  },
  yellowBg: {
    backgroundColor: "#fbff82",
    height: "1000px",
    color: "#b6c700",
    display: "flex",
    alignItems: "center",
    flexDirection: "column"
  },
  redBg: {
    backgroundColor: "#ff5757",
    height: "1000px",
    color: "#a30000",
    display: "flex",
    alignItems: "center",
    flexDirection: "column"
  },
  trafficlight: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    position: "absolute",
    top: "25%",
    border: "1px solid black",
    width: "180px",
    height: "350px",
    borderRadius: "10px"
  },
  text: {
    fontSize: "60px",
    position: "absolute",
    top: "75%",
  },
  lights: {
    marginTop: "20%"
  },
  lightOff: {
    border: "1px solid lightgrey",
    borderRadius: "50px",
    width: "50px",
    height: "50px",
    marginBottom: "40px",
    backgroundColor: "lightgrey"
  },
  greenLight: {
    border: "1px solid green",
    borderRadius: "50px",
    width: "50px",
    height: "50px",
    marginBottom: "40px",
    backgroundColor: "green",
    boxShadow: "0 0 30px green"
  },
  yellowLight: {
    border: "1px solid yellow",
    borderRadius: "50px",
    width: "50px",
    height: "50px",
    marginBottom: "40px",
    backgroundColor: "yellow",
    boxShadow: "0 0 30px yellow"
  },
  redLight: {
    border: "1px solid red",
    borderRadius: "50px",
    width: "50px",
    height: "50px",
    marginBottom: "40px",
    backgroundColor: "red",
    boxShadow: "0 0 30px red"
  },
}));

function TrafficLight() {
  const classes = useStyles();
  const [greenLight, setGreenLight] = useState(classes.greenLight)
  const [yellowLight, setYellowLight] = useState(classes.lightOff)
  const [redLight, setRedLight] = useState(classes.lightOff)

  const [bgColor, setBgColor] = useState(classes.greenBg)
  const [color, setColor] = useState("green")

  useEffect(() => {
    const intervalHandle = setInterval(function () {
      if (greenLight === classes.greenLight) {
        setTimeout(function () {
          setYellowLight(classes.yellowLight)
          setBgColor(classes.yellowBg)
          setColor("yellow")
          setGreenLight(classes.lightOff)
          setRedLight(classes.lightOff)
          return
        }, 4000);
      }

      if (yellowLight === classes.yellowLight) {
        setRedLight(classes.redLight)
        setBgColor(classes.redBg)
        setColor("red")
        setYellowLight(classes.lightOff)
        setGreenLight(classes.lightOff)
        return
      }

      if (redLight === classes.redLight) {
        setTimeout(function () {
          setGreenLight(classes.greenLight)
          setBgColor(classes.greenBg)
          setColor("green")
          setYellowLight(classes.lightOff)
          setRedLight(classes.lightOff)
        }, 4000);
      }
    }, 4000);
    return function cleanup() {
      clearInterval(intervalHandle)
    }
  }, [greenLight, yellowLight, redLight, classes.lightOff, classes.greenBg, classes.yellowBg, classes.redBg, classes.greenLight, classes.redLight, classes.yellowLight]);



  return (
    <div className={bgColor}>
      <div className={classes.trafficlight}>
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