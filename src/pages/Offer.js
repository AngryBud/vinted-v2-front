import { useParams } from "react-router-dom";
import {useState, useEffect} from "react";
import axios from "axios";
import Products from "../components/Content/Products";
// import Cookies from "js-cookie";

const Offer = ({token, setToken, toggleModal, setToggleModal, nameModal, setNameModal}) => {
  const { id } = useParams();

  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
        const fetchData = async () => {
        const response = await axios.get(`https://vinted-v2-back.herokuapp.com/offer/${id}`);
        setData(response.data);
        setIsLoading(false);
      }
      fetchData();
  }, [id]);

  return isLoading ? (
        <span>En cours de chargement...</span>
        ) : (
         <Products data={data} id={id} token={token} setToken={setToken}
                                    setToggleModal={setToggleModal} toggleModal={toggleModal}
                                    nameModal={nameModal}
                                    setNameModal={setNameModal}/>
      );
}


export default Offer;