import axios from "axios";
import { useState } from "react";
import "./FormLogin.css";
// import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";


const FormLogin = ({token ,setToken,setToggleModal, setNameModal}) => {
    
    const [userMail, setUserMail] = useState("");
    const [userPass, setUserPass] = useState("");
    const [userPass2, setUserPass2] = useState("");
    const navigate = useNavigate();
    const handleSubmit = async (ev) => {
        ev.preventDefault();
        try {
            console.log("on passe la");
            const user = {"email": userMail, "password": userPass}
            const response = await axios.post("https://vinted-v2-back.herokuapp.com/user/login",user) 
            // Cookies.set("userToken", response.data.token);
            setToken(response.data.token);
        //   console.log(response.data.token);
            setToggleModal(false);
            navigate("/");
        } catch (error) {
            alert(error.message);
        }
    }
    return    <>
                <div className="modal-header">
                    <h4>Se connecter</h4>
                    <button
                      type="button"
                      className="modal-close-button"
                      onClick={() => {
                        setToggleModal(false);
                      }}
                    >
                      <span>&times;</span>
                    </button>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="modal-body">
                        <input placeholder="Email" type="email"onChange={(e)=>{
                                setUserMail(e.target.value);
                                }}value={userMail} />
                        <input placeholder="Password" type="password" onChange={(e)=>{
                                setUserPass(e.target.value);
                                }}value={userPass}/>
                        <input placeholder="ConfirmPassword" type="password" onChange={(e)=>{
                                setUserPass2(e.target.value);
                                }}value={userPass2}/>
                            {/* <button onClick={()=>{
                                document.getElementById('pass1').type = "text";
                            }}><FontAwesomeIcon icon="fa-solid fa-eye" /></button> */}
                        {/* </div> */}
                    </div>
                    <div className="div-submit">
                        <button id="submit" type="submit">Se connecter</button>
                    </div>
                </form>
                <span id="loginNoAccount" onClick={()=>{
                    setNameModal("signup");
                }}>Pas encore inscrit? Inscris-toi!</span>
              </>
}

export default FormLogin;