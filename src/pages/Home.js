
// import Header from "../components/header/Header"
import HomeOffer from "../components/header/HomeOffer";
import TopHeader from "../components/header/TopHeader"
import {useState, useEffect} from "react";
import axios from "axios";
// import Cookies from "js-cookie";
import picHome from "../img/picHome.jpeg";
import { Link } from 'react-router-dom';
import "./Home.css";

export default function Home({token, setToken,
    toggleModal, setToggleModal,
    nameModal, setNameModal,
    sort, setSort,
    minMax, setMinMax,
    title, setTitle}) {
                                      
    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const handleClick =() =>{
        setNameModal("signup");
        setToggleModal(true);
    }

    useEffect(() => {
      const fetchData = async () => {
        const response = await axios.get(`https://vinted-v2-back.herokuapp.com/offers?title=${title}&priceMin=${minMax[0]}&priceMax=${minMax[1]}&sort=${sort}`);
        setData(response.data);
        setIsLoading(false);
      };
      fetchData();
    }, [title, minMax, sort]);
    return  isLoading ? (
            <span>En cours de chargement...</span>
            ) : (
            <div className="homepage">
                <TopHeader token={token} setToken={setToken}
                                          toggleModal={toggleModal} setToggleModal={setToggleModal}
                                          nameModal={nameModal} setNameModal={setNameModal}
                                          sort={sort} setSort={setSort}
                                          minMax={minMax} setMinMax={setMinMax}
                                          title={title} setTitle={setTitle}/>
                <div className="picHome">
                    <img src={picHome} alt="picHome"/>
                    <div className="picInfo">
                        <span>Pensez a faire du tri dans vos placards ?</span>
                        {token ? (<Link to="/publish">
                        <button >Commencez à vendre</button>
                        </Link>):(
                            <button onClick={handleClick}>Commencez à vendre</button>
                        )}
                        
                    </div>
                </div>
                <div className="fullProducts">
                
                {data.offers.map((offer,index) => {
                    return <HomeOffer key={index} offer={offer}/>             
                })}
                </div>
                {/* <Pagination postPerPage={postsPerPage} totalPosts={data.count}/> */}
            </div>
            );
}