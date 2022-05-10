import logo from "../../img/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import Modal from "../../modals/Modal";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import './HeaderOnly.css';

const HeaderOnly = ({token, setToken, 
                    toggleModal, setToggleModal,
                    nameModal, setNameModal,setTitle}) => {
    
    const navigate = useNavigate();
    const handleClick= ()=>{
        navigate("/");
        setToggleModal(true);
        setNameModal("login");}
    

    console.log("token :::: ", token);

    return <div className="topHeader">
            <Modal token={token} setToken={setToken}
                    toggleModal={toggleModal} setToggleModal={setToggleModal}
                    nameModal={nameModal} setNameModal={setNameModal}/>
            <Link to="/"><img src={logo} alt="logo"/></Link>
            <div className="barFilter">
                <div className="searchBar">
                    <FontAwesomeIcon icon={faMagnifyingGlass} 
                                style={{ fontSize:"20px" , margin:"auto 5px", color: "grey"}}/>
                    <input name="searchBar" onChange={(e) =>{
                        setTitle(e.target.value);
                    }}></input>
                </div>
                {/* <FilterSort title={title} sort={sort} setSort={setSort} minMax={minMax} setMinMax={setMinMax}/> */}
            </div>
            {!token ? (
            <div className="loginSignup">
                <button id="signup" className="modal-toggle" onClick={handleClick}>S'inscrire</button>

                <button id="login" className="modal-toggle" onClick={handleClick}>Se connecter</button>

            </div>): 
            <div>
                <button id="logout" onClick={()=>{
                    setToken(null);
                    Cookies.remove("userToken");
                
                }}>Logout</button>
            </div> }
            <div className="sell">
                <Link to="/publish">
                <button>Vends tes articles</button>
                </Link>
            </div>
        </div>;
}

export default HeaderOnly;