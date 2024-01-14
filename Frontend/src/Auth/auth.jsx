import './authStyles.css'; 
import { useContext, useState } from 'react';
import { AuthContext } from '../context/authContext.js';
import { useForm } from '../utilities/customHook';
import { useMutation } from '@apollo/react-hooks';
import { gql } from 'graphql-tag';
import { useNavigate } from 'react-router-dom';
import { Alert } from '@mui/material';


const REGISTER_USER = gql`
    mutation Mutation(
        $registerInput: RegisterInput
    ) {
        registerUser(
            registerInput: $registerInput
        ) {
            email,
            username,
            token
        }
    }
`

const LOGIN_USER = gql`
    mutation login(
        $loginInput: LoginInput
    ) {
        loginUser(
            loginInput: $loginInput
        ){
            email,
            username,
            token
        }
    }
`

const Login = (props) => {

    const context = useContext(AuthContext);
    const [registerActive, setRegisterActive] = useState(false);
    let navigate = useNavigate();
    const [errors, setErrors] = useState([]);

    const toggleActive = () => {
        setRegisterActive(!registerActive);
    }

    function loginUserCallback(){
        loginUser();
    }

    function registerUserCallback() {
        registerUser();
    }

    const { onChange : onChangeLogin, onSubmit: onSubmitLogin, values: valuesLogin } = useForm(loginUserCallback, {
        username: '',
        password: ''
    })

    const { onChange, onSubmit, values } = useForm(registerUserCallback, {
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    
    const [loginUser, { loading: loadingLogin }] = useMutation(LOGIN_USER, {
        update(proxy, {data: { loginUser: userData }}){
            context.login(userData);
            navigate('/');
        },
        onError({graphQLErrors}) {
            setErrors(graphQLErrors);
        },
        variables: { loginInput: valuesLogin }
    });


    const [registerUser, { loading }] = useMutation(REGISTER_USER, {
        update(proxy, {data: { registerUser: userData }}){
            context.login(userData);
            navigate('/');
        },
        onError({graphQLErrors}) {
            setErrors(graphQLErrors);
        },
        variables: { registerInput: values }
    });

    return (
        <div className={`container ${registerActive ? 'active' : ''}`} id="container">
            <div className={`form-container register ${registerActive ? '' : 'login'}`}>
                <form>
                    <h1>Register</h1>
                    <br></br>
                    <input type="text" name='username' placeholder="Username" onChange={onChange} />
                    <input type="email" name='email' placeholder="Email" onChange={onChange} />
                    <input type="password" name='password' placeholder="Password" onChange={onChange} />
                    <input type="password" name='confirmPassword' placeholder="Confirm Password" onChange={onChange} />
                    {errors.map(function(err, index){
                        return <Alert key={index} severity="error">
                            {err.message}
                        </Alert>
                    })}
                    <button onClick={onSubmit}>Register</button>
                </form>
            </div>
            <div className={`form-container login ${registerActive ? 'register' : ''}`}>
                <form>
                    <h1>Login</h1>
                    <div className="social-icons">
                        {/* Add social media icons and links */}
                    </div>
                    <input type="text" name='username' placeholder="Username" onChange={onChangeLogin}/>
                    <input type="password" name='password' placeholder="Password" onChange={onChangeLogin} />
                    {errors.map(function(err, index){
                        return <Alert key={index} severity="error">
                            {err.message}
                        </Alert>
                    })}
                    <button onClick={onSubmitLogin}>Login</button>
                </form>
            </div>
            <div className="toggle-container">
                <div className="toggle">
                    <div className="toggle-panel left" onClick={toggleActive}>
                        <h2>Hello there!</h2>
                        <p>You are already a member?</p>
                        <button className="hidden">Login</button>
                    </div>
                    <div className="toggle-panel right" onClick={toggleActive}>
                        <h2>Hi, welcome to QuizApp</h2>
                        <p>You are new? Register and sharp your intelligence</p>
                        <button className="hidden">Register</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
