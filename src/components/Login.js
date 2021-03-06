import React from "react";
import {Avatar, Grid, Paper,TextField,Checkbox,FormControlLabel,Button,Link,Typography} from "@material-ui/core"
import logo from "../mrdoc.png"
function Login(){
    const paperStyle={padding:20,height:"70vh",width:280,margin:"20px auto"};
    const avatarStyle={backgroundColor:'#770000',width:100,height:100};
    return(

        <Grid>
        <Paper elevation={10} style={paperStyle}>
            <Grid align={"center"}>
                <Avatar style={avatarStyle}>
                    <img  src={logo} style={{height:100,width:100}}></img>
                </Avatar>
                <h2>Sign-In</h2>
            </Grid>
            <TextField label={"Username"} placeholder={"Enter Username"} fullWidth required/>
            <TextField type={"Password"} label={"Password"} placeholder={"Enter Password"} fullWidth required/>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" />
            <Button type={"submit"} color={"primary"} variant={"contained"} style={{margin:"8px 0"}} fullWidth>Sign in</Button>
            <Typography>
                <Link href={"#"} >Forget Password?</Link>
            </Typography>
            <Typography>Don't You have a Account?
                <Link href={"#"} >Sign up</Link>
            </Typography>

        </Paper>
        </Grid>
    )
}

export default Login;
