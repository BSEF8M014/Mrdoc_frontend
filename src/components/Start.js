import logo from "../mrdoc.png"
import "../App.css";
import {Grid} from "@material-ui/core"
function Start(){
    return (
        <Grid className={"Background"} align="center">
            <img className={"logo"} src={logo} alt={"LOGO"} style={{margin:"10% auto"}}/>
        </Grid>

    )
}

export default Start;
