import React, { useState, useContext, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { AuthContext } from '../../context/AuthContext';
import Alert from '@material-ui/lab/Alert';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useHistory } from "react-router-dom";
import './Register.css';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    }
}));

const Register = ({ setPopover, handleCloseRegisterMd }) => {
    const classes = useStyles();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const { handleRegister, errRegister, setErrRegister } = useContext(AuthContext)
    const [errEmail, setErrEmail] = useState('');
    const [errPassword, setErrPassword] = useState('');
    const [confPassword, setConfPassword] = useState('')
    const [openBackdrop, setOpenBackdrop] = useState(false);
    let history = useHistory();


    useEffect(() => {
        if (errRegister) {
            setOpenBackdrop(false)
        }
        else {
            // setOpenBackdrop(true)
        }
        return () => {
        }
    }, [errRegister])

    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleChangeConfirmPassword = (e) => {
        setConfirmPassword(e.target.value)
    }

    // validate email field
    const handleBlurEmail = () => {
        setErrEmail('')
        if (!email) {
            return setErrEmail("Email can't empty")

        }
        let lastAtPos = email.lastIndexOf('@');
        let lastDotPos = email.lastIndexOf('.');

        if (!(lastAtPos < lastDotPos && lastAtPos > 0 && email.indexOf('@@') == -1 && lastDotPos > 2 && (email.length - lastDotPos) > 2)) {
            setErrEmail("Email is not valid");
        }
    }

    // validate password
    const handleBlurPassword = () => {
        setErrPassword('')
        if(!password){
            return setErrPassword("Password can't empty")
        }
        if (password.length < 6) {
            return setErrPassword('Password should be at least 6 characters!')
        }
    }

    // validate confirm password
    const handleBlurConfirmPassword = () => {
        setConfPassword('');
        if(password !== confirmPassword || !confirmPassword){
            setConfPassword('rePassword incorrect')
        }
    }

    // submit register account
    const handelSubmitRegister = async (e) => {
        e.preventDefault();
        setOpenBackdrop(true)
        if (errEmail && errPassword) {
            setOpenBackdrop(false)
            return false
        }
        else {
            const rs = await handleRegister(email, password)
            if (rs) {
                setOpenBackdrop(false)
                handleCloseRegisterMd()
                setPopover(null)
            }
        }
    }

    const handleCloseBackdrop = () => {
        setOpenBackdrop(false);
    }

    const handleCloseRegister = () => {
        setErrRegister('')
    }

    return (
        <Container onBlur={handleCloseRegister} component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                {
                    errRegister ?
                        <Alert severity="error">{errRegister}!</Alert>
                        : null
                }
                <form onSubmit={(e) => handelSubmitRegister(e)} className={classes.form} noValidate>
                    <TextField
                        error={errEmail ? true : false}
                        helperText={errEmail}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        value={email}
                        onChange={(e) => handleChangeEmail(e)}
                        onBlur={() => handleBlurEmail()}
                    />
                    <TextField
                        error={errPassword ? true : false}
                        helperText={errPassword}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={password}
                        onBlur={() => handleBlurPassword()}
                        onChange={(e) => handleChangePassword(e)}
                    />
                    <TextField
                        error={confPassword ? true : false}
                        helperText={confPassword}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="ConfirmPassword"
                        label="ConfirmPassword"
                        type="password"
                        id="ConfirmPassword"
                        autoComplete="current-password"
                        value={confirmPassword}
                        onBlur={()=>handleBlurConfirmPassword()}
                        onChange={(e) => handleChangeConfirmPassword(e)}
                    />
                    {/* <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    /> */}
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Register
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="#" variant="body2">
                                {"Do have an account? Login"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={8}>
            </Box>
            <Backdrop className={classes.backdrop} open={openBackdrop} onClick={handleCloseBackdrop}>
                <CircularProgress color="inherit" />
            </Backdrop>
        </Container>
    );
}

export default Register;
