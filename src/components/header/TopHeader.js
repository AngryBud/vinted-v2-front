import logo from "../../img/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import Modal from "../../modals/Modal";
import Cookies from "js-cookie";
import './TopHeader.css';
import FilterSort from "./Filter.js";

const TopHeader = ({token, setToken, 
                    toggleModal, setToggleModal,
                    nameModal, setNameModal, sort, setSort,
                    minMax, setMinMax, title, setTitle}) => {
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
                <FilterSort title={title} sort={sort} setSort={setSort} minMax={minMax} setMinMax={setMinMax}/>
            </div>
            {!token ? (
            <div className="loginSignup">
                <button id="signup" className="modal-toggle" onClick={()=>{

                        setToggleModal(true);
                        setNameModal("signup");}}>S'inscrire</button>

                <button id="login" className="modal-toggle" onClick={()=>{
                        setToggleModal(true);
                        setNameModal("login");}}>Se connecter</button>

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

export default TopHeader;