import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  greenBg: {
    backgroundColor: "#abffab",
    height: "1000px",
    color: "#005c00",
    display: "flex",
    alignItems: "center",
    flexDirection: "column"
  },
  yellowBg: {
    backgroundColor: "#fffdab",
    height: "1000px",
    color: "#c7c200",
    display: "flex",
    alignItems: "center",
    flexDirection: "column"
  },
  redBg: {
    backgroundColor: "#ff8080",
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
    border: "1px solid #00c900",
    borderRadius: "50px",
    width: "50px",
    height: "50px",
    marginBottom: "40px",
    backgroundColor: "#00c900",
    boxShadow: "0 0 30px #00c900"
  },
  yellowLight: {
    border: "1px solid #f0ea00",
    borderRadius: "50px",
    width: "50px",
    height: "50px",
    marginBottom: "40px",
    backgroundColor: "#f0ea00",
    boxShadow: "0 0 30px #f0ea00"
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

export default useStyles