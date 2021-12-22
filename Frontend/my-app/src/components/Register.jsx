import { Link } from "react-router-dom";

export default function Register(){
    return (
        <body className="register-body" img src={require("../img/intercontinental.jpg")}>
        <div className="register-box">
        <img className="avatar" src={require("../img/escudo.jpg")} alt="Escudo Peñarol" />
        <h1>Register Here</h1>
        <form>
            <label for="email">Email</label>
            <input type="email" placeholder="Enter Email" />

            <label for="username">USERNAME</label>
            <input type="text" placeholder="Enter Username"/>

            <label for="password">PASSWORD</label>
            <input type="password" placeholder="Enter Password"/>

           <Link to="/"><input type="submit" value="Register now"/></Link> 
            <br/><br/>
        </form>
    </div>
    </body>
    )} 