import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  container: {
    backgroundColor: "red"
  },
  greenBg: {
    backgroundColor: "#abffab",
    height: "650px",
    width: "800px",
    color: "#005c00",
    margin: "20px auto 0",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    border: "2px solid #35e000",
    borderRadius: "10px"
  },
  yellowBg: {
    backgroundColor: "#fffdab",
    height: "650px",
    width: "800px",
    margin: "20px auto 0",
    color: "#c7c200",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    border: "2px solid #edea00",
    borderRadius: "10px"
  },
  redBg: {
    backgroundColor: "#ff8080",
    height: "650px",
    width: "800px",
    margin: "20px auto 0",
    color: "#a30000",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    border: "2px solid #fc2626",
    borderRadius: "10px"
  },
  greenTrafficLight: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    position: "absolute",
    top: "120px",
    border: "2px solid #005c00",
    width: "180px",
    height: "350px",
    borderRadius: "10px"
  },
  yellowTrafficLight: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    position: "absolute",
    top: "120px",
    border: "2px solid #c7c200",
    width: "180px",
    height: "350px",
    borderRadius: "10px"
  },
  redTrafficLight: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    position: "absolute",
    top: "120px",
    border: "2px solid #a30000",
    width: "180px",
    height: "350px",
    borderRadius: "10px"
  },
  text: {
    fontSize: "60px",
    position: "absolute",
    top: "550px",
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