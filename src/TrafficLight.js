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
    height: "400px"
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
}));

function TrafficLight() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.trafficlight}>
        Traffic Light
      </div>
      <div className={classes.text}>
        The light is green.
      </div>
    </div>
  );
}

export default TrafficLight;