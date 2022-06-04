import "../../styles/hotels/searchitemh.css"
import img1 from "../../assets/images/cards/img-1.jpg"

const SearchItemH = () => {
  return (
    <div className="searchItem">
        <img src={img1} alt="" className="searchItemImg" />
        <div className="siDescrption">
            <h1 className="siTitle">Street Apartment</h1>
            <span className="siDistence">55m from center</span>
            <span className="siTaxiOp">free airport taxi</span>
            <span className="siSubtitle">
                Studio Apartment with air conditioning
            </span>
            <span className="siFeatures">
                Entire studio . 1 bathroom . full bed
            </span>
            <span className="siCancleOp">Free Cancelation</span>
            <span className="cancleOpSubtitle">
                you can cancle later so lock in this great price today
            </span>


        </div>
        <div className="siDetails">
            <div className="searchItemRating">
                <span>Excellent</span>
                <button>8.9</button>
            </div>
            <div className="searchitemdetailText">
                <span className="price">120 LKR</span>
                <span className="taxOption">taxes and pees</span>
                <button className="searchitemCheckButton">See avilability</button>
            </div>
        </div>

    </div>
  )
}

export default SearchItemH