import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  greenBg: {
    backgroundColor: "#acffa1",
    height: "1000px",
    color: "green"
  },
  yellowBg: {
    backgroundColor: "#fbff82",
    height: "1000px",
    color: "#b6c700"
  },
  redBg: {
    backgroundColor: "#ff5757",
    height: "1000px",
    color: "#a30000"
  },
  trafficlight: {
    backgroundColor: "white",
    position: "fixed",
    top: "25%",
    left: "50%",
    marginTop: "-50px",
    marginLeft: "-100px",
    border: "1px solid black",
    width: "180px",
    height: "350px",
    borderRadius: "10px"
  },
  text: {
    fontSize: "50px",
    position: "fixed",
    top: "75%",
    left: "46%",
    marginTop: "-50px",
    marginLeft: "-100px",
  },
  lights: {
    position: "fixed",
    top: "31%",
    left: "53.5%",
    marginTop: "-50px",
    marginLeft: "-100px",
  },
  light: {
    border: "1px solid lightgrey",
    borderRadius: "50px",
    width: "50px",
    height: "50px",
    marginBottom: "40px",
    backgroundColor: "lightgrey"
  },
  greenLight: {
    border: "1px solid lightgrey",
    borderRadius: "50px",
    width: "50px",
    height: "50px",
    marginBottom: "40px",
    backgroundColor: "green",
  },
  yellowLight: {
    border: "1px solid lightgrey",
    borderRadius: "50px",
    width: "50px",
    height: "50px",
    marginBottom: "40px",
    backgroundColor: "yellow"
  },
  redLight: {
    border: "1px solid lightgrey",
    borderRadius: "50px",
    width: "50px",
    height: "50px",
    marginBottom: "40px",
    backgroundColor: "red"
  },
}));

function TrafficLight() {
  const classes = useStyles();
  const [green, setGreen] = useState(classes.greenLight)
  const [yellow, setYellow] = useState(classes.light)
  const [red, setRed] = useState(classes.light)

  const [bgColor, setBgColor] = useState(classes.greenBg)
  const [color, setColor] = useState("green")

  setInterval(function () {
    if (green === classes.greenLight) {
      setYellow(classes.yellowLight)
      setBgColor(classes.yellowBg)
      setColor("yellow")
      setGreen(classes.light)
      setRed(classes.light)
    }

    if (yellow === classes.yellowLight) {
      setRed(classes.redLight)
      setBgColor(classes.redBg)
      setColor("red")
      setYellow(classes.light)
      setGreen(classes.light)
    }

    if (red === classes.redLight) {
      setGreen(classes.greenLight)
      setBgColor(classes.greenBg)
      setColor("green")
      setYellow(classes.light)
      setRed(classes.light)
    }
  }, 5000);


  return (
    <div className={bgColor}>
      <div className={classes.trafficlight}>
      </div>
      <div className={classes.lights}>
        <div className={red}></div>
        <div className={yellow}></div>
        <div className={green}></div>
      </div>
      <div className={classes.text}>
        The light is {color}.
      </div>
    </div>
  );
}

export default TrafficLight;