import { Link } from "react-router-dom";

export default function Login(){

    return(
        <body>
        <div className="login-box" >
        <img className="avatar" src={require("../img/escudo.jpg")} alt="Escudo Peñarol" /> 
        <h1>Login Here</h1>
        <form>
            
            <label for="username">USERNAME</label>
            <input type="text" placeholder="Enter Username" />

            
            <label for="password">PASSWORD</label>
            <input type="password" placeholder="Enter Password" />

          <Link to="/Inicio"> <input type="submit" value="Log In"/> </Link> 
            <br/><br/>
            <a href="Register">Don't have an account?</a>

        </form>
         </div>
        </body> )}