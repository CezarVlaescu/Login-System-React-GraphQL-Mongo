import './navbar.css';
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/authContext';

function Navbar(){
    let navigate = useNavigate();
    const { user, logout } = useContext(AuthContext);

    const onLogout = () => {
        logout();
        navigate('/login');
    }

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position='fixed' style={{ background: 'rgba(0,0,0,0.5)', zIndex: 1100 }}>
                <Toolbar>
                    <Typography variant='h5' component='div' sx={{ flexGrow: 1 }}>
                        <Link to="/" style={{textDecoration: "none", color: "white"}}>Quiz App</Link>
                    </Typography>
                    <Box alignItems="right" sx={{flexGrow: 1, textAlign: "right"}}>
                        { user ? // if the user exists do something
                            <>
                                <Button style={{textDecoration: "none", color: "white"}} onClick={onLogout}>Logout</Button>
                            </> 
                        :
                            <>
                                <Link to="/login" style={{textDecoration: "none", color: "white"}}>Login</Link>
                            </>
                        }
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Navbar;