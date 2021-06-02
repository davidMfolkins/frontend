import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  container: {
    backgroundColor: "#acffa1",
    height: "1000px"
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
    color: "green",
    fontSize: "50px",
    position: "fixed",
    top: "75%",
    left: "45%",
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
  }
}));

function TrafficLight() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.trafficlight}>
      </div>
      <div className={classes.lights}>
        <div className={classes.light}></div>
        <div className={classes.light}></div>
        <div className={classes.light}></div>
      </div>
      <div className={classes.text}>
        The light is green.
      </div>
    </div>
  );
}

export default TrafficLight;