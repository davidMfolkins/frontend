import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  container: {
    backgroundColor: "darkgreen"
  },
  trafficlight: {
    backgroundColor: "white"
  },
  text: {
    color: "green"
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
        The Light is Green
      </div>
    </div>
  );
}

export default TrafficLight;