import { Link, useNavigate } from "react-router-dom";
import "./Infos.css";

const Info = ({data, id, token, setNameModal, setToggleModal}) => {
    const navigate = useNavigate();

    const handleClick =() =>{

        navigate("/");
        setNameModal("login");
        setToggleModal(true);
    }
  return <div className="fullInfos">
            <div className="topInfos">
                <span id="offerPrice">{data.product_price} €</span>
                <div className="brandAndCo">
                    <div className="infos">
                        <span id="offerBrand">MARQUE</span>
                        <span id="offerSize">TAILLE</span>
                        <span id="offerState">ÉTAT</span>
                        <span id="offerColor">COULEUR</span>
                        <span id="offerPlace">EMPLACEMENT</span>
                    </div>
                    <div className="resInfos">
                        <span id="offerBrand">{data.product_details[0].BRAND}</span>
                        <span id="offerSize">{data.product_details[1].SIZE}</span>
                        <span id="offerState">{data.product_details[2].CONDITION}</span>
                        <span id="offerColor">{data.product_details[3].COLOR}</span>
                        <span id="offerPlace">{data.product_details[4].CITY}</span>
                    </div>
                </div>
            </div>
            <div className="description">
                <span id="offerName">{data.product_name}</span>
                <span id="offerDescription">{data.product_description}</span>
            </div>
            <div className="userProduct">
                {data.owner.account.avatar &&<img id ="userAvatar" src={data.owner.account.avatar.secure_url} alt="avatar"></img>}
                <span>{data.owner.account.username}</span>
            </div>
            
            {token ? (<Link to="/payement"  state={{
                        product_name: data.product_name,
                        product_price: data.product_price,
                    }}>
                    <button>Achetez</button></Link>
                    ):
                    (<button onClick={handleClick}>Achetez</button>)}
            
          </div>;
}

export default Info;