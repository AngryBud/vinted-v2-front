
import Infos from "./Infos.js";
import "./Products.css";
import HeaderOnly from "../header/HeaderOnly";

const Products = ({data, id, token, setToken,toggleModal, setToggleModal,nameModal, setNameModal}) => {


  return  <div className="productPage">
              <HeaderOnly token={token} setToggleModal={setToggleModal} setNameModal={setNameModal}/>
            <div className="bodyProduct">
              <img src={data.product_image.secure_url} alt="product_image"></img>
              <Infos data={data} id={id} token={token} setToggleModal={setToggleModal} setNameModal={setNameModal}/>
            </div>
            
          </div>;
}

export default Products;