import {Link} from "react-router-dom";
import "./HomeOffer.css";

const HomeOffer = ({offer}) => {
  return <Link to={`/offer/${offer._id}`}>
            <div className="eachProduct">
                <div className="user">
                    {/* {offer.owner.account.avatar &&<img src={offer.owner.account.avatar.secure_url} alt="avatar"></img>}
                    <span>{offer.owner.account.username}</span> */}
                </div>
                <img src={offer.product_image.secure_url} alt="product_image"></img>
                <div className="productInfo" onClick={()=>{
  
                }}>
                    <span id="price">{offer.product_price} €</span>
                    <span id="size">{offer.product_details[1].SIZE}</span>
                    <span id="brand">{offer.product_details[0].BRAND}</span>
                </div>
            </div>
        </Link>;
}

export default HomeOffer;