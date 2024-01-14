import Quiz  from "../components/Quiz/Quiz";
import Login from "../Auth/auth";
import { jsQuiz } from "../constants";
import { AuthContext } from "../context/authContext";
import { useContext } from "react";

function Homepage(){

    const { user } = useContext(AuthContext);

    return (
        <>
          {user ?
          <>
            <Quiz questions={jsQuiz.questions}/>
          </> 
          :
          <>
            <Login />
          </> 
          }
        </>
    )
}

export default Homepage;