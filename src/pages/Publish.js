import {useNavigate} from "react-router-dom";
// import logo from "../img/logo.png";
import ContentPublished from "./ContentPublished";
// import Cookies from "js-cookie";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import "../components/header/TopHeader.css";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Publish.css";
import TopHeader from "../components/header/TopHeader";

export default function Publish({data,setData, token, setToken, 
    toggleModal, setToggleModal,
    nameModal, setNameModal}) {

        const [publish, setPublish] = useState({});
        const navigate = useNavigate();
        useEffect(() => {
        const saveData = async () => {
            const formData = new FormData();
            formData.append("title", publish.title);
            formData.append("description", publish.description);
            formData.append("price", publish.price);
            formData.append("condition", publish.condition);
            formData.append("city", publish.city);
            formData.append("brand", publish.brand);
            formData.append("size", publish.size);
            formData.append("color", publish.color);
            formData.append("picture", publish.picture);
            
            console.log(token);
            try {
              if (publish.title) {
                const response = await axios.post(
                  "https://vinted-v2-back.herokuapp.com/offer/publish",
                  formData,
                  {
                    headers: {
                      Authorization: `Bearer ${token}`,
                      "Content-Type": "multipart/form-data",
                    },
                  }
                );
                if (response.data._id) {
                  navigate(`/offer/${response.data._id}`);
                }
              }
            } catch (error) {
              console.log(error.message);
            }
          };
            saveData();
            }, [publish, token, navigate]);
        return      <>
                    <TopHeader token={token}/>
                    <ContentPublished data={data} setData={setData} publish={publish} setPublish={setPublish}/>
                </>
    }