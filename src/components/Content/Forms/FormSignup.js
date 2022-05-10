import axios from "axios";
import { useState } from "react";
import "./FormSignup.css";
// import FormLogin from "./FormLogin";
// import Cookies from "js-cookie";
// import { useNavigate } from "react-router-dom";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {AiFillEye} from 'react-icons/ai';

const FormSignup = ({token ,setToken,setToggleModal, setNameModal}) => {
    const [userName, setUsername] = useState("");
    const [userMail, setUserMail] = useState("");
    const [userPass1, setUserPass1] = useState("");
    const [newsletter, setNewsletter] = useState(false);
    // const [tokens, setToken] = useState([]);
    // const navigate = useNavigate();

    const handleSubmit = async (ev) => {
        ev.preventDefault();
        try {
            // console.log("on passe la");
            const user = {"username": userName, "email": userMail, "password": userPass1, "newsletter":newsletter}
            const response = await axios.post("https://vinted-v2-back.herokuapp.com/user/signup",user) 
            // Cookies.set("userToken", response.data.token);
            setToken(response.data.token);
        //   console.log(response.data.token);
            setToggleModal(false)
            // navigate("/");
            // <ModalSignup isShowing={!isShowing1} hide={hide} text1="Create account"/>
        } catch (error) {
          // console.log(error);
            alert();
        }
  }
  return    <>  
            <div className="modal-header">
                    <h4>S'inscrire</h4>
                    <button
                      type="button"
                      className="modal-close-button"
                      onClick={()=>{setToggleModal(false)}}
                    >
                      <span>&times;</span>
                    </button>
                    </div>
            <form onSubmit={handleSubmit}>
            <div className="modal-body">
                <input name="username" placeholder="Username" type="text" onChange={(e)=>{
                        setUsername(e.target.value);
                        }}value={userName}/> 
                <input name="email" placeholder="Email" type="email"onChange={(e)=>{
                        setUserMail(e.target.value);
                        }}value={userMail} />
                <div id="for-input-pass">
                    <input name="password" id="pass1" placeholder="Password" type="password" onChange={(e)=>{
                        setUserPass1(e.target.value);
                        }}value={userPass1}/>
                </div>
            </div>
                <div className="modal-body-newsletter">
                    <div className="check">
                      <input name="newsletter" type="checkbox" onClick={()=>{
                        setNewsletter(!newsletter);
                      }}></input>
                      <span>S'inscrire a notre newsletter</span>
                    </div>
                    <p>En m'inscrivant je confirme avoir lu et accepté les 
                        termes et condition et Politiques de Confidentialité
                        de Vinted. Je confirme avoir au moins 18 ans. 
                    </p>
                </div>
                <div className="div-submit">
                  <button id="submit" type="submit">Create</button>
                </div>
            </form>
            <span id="alreadySignin" onClick={()=>{
              setNameModal("login");
            }}>Déjà inscrit? Connectez-vous</span>
            </>  
}

export default FormSignup;