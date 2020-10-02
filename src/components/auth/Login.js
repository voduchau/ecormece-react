import React, { useState, useContext, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Container from '@material-ui/core/Container';
import { AuthContext } from '../../context/AuthContext';

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

const Login = ({ setPopover, handleCloseLoginMd }) => {
    const classes = useStyles();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errEmail, setErrEmail] = useState('');
    const [errPassword, setErrPassword] = useState('');
    const { handleLogin, errLogin } = useContext(AuthContext)
    const [openBackdrop, setOpenBackdrop] = useState(false);


    useEffect(() => {
        if (errLogin) {
            setOpenBackdrop(false)
        }
        else {
            // setOpenBackdrop(true)
        }
        return () => {
        }
    }, [errLogin])

    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value)
    }

    // validate email
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

    const handleCloseBackdrop = () => {
        setOpenBackdrop(false);
    }

    const handelSubmitLogin = async (e) => {
        e.preventDefault();
        setOpenBackdrop(true)
        if (errEmail && errPassword) {
            setOpenBackdrop(false)
            return false
        }
        else {
            const rs = await handleLogin(email, password)
            if (rs) {
                setOpenBackdrop(false)
                handleCloseLoginMd()
                setPopover(null)
            }
        }

    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                {
                    errLogin ?
                        <Alert severity="error">{errLogin}!</Alert>
                        : null
                }
                <form onSubmit={(e) => handelSubmitLogin(e)} className={classes.form} noValidate>
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
                        onBlur={() => handleBlurEmail()}
                        onChange={(e) => handleChangeEmail(e)}
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
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="#" variant="body2">
                                {"Don't have an account? Sign Up"}
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

export default Login;
