import StarIcon from '../icon/starIcon.svg';
import BlackButtonArrow from '../icon/blackButtonArrow.svg';

export default function OnSale () {
    return (
        <div className="on-sale">
            <h3>AKCIÓS TERMÉKEK</h3>
            <div className="product-container">
                <div className="product">
                    <img src="https://picsum.photos/400/400" alt="product" />
                    <p className="product-name">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                    <p className="product-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua incididunt ut. </p>
                    <div className="product-rating">
                        <img src={StarIcon} alt="star" />
                        <img src={StarIcon} alt="star" />
                        <img src={StarIcon} alt="star" />
                        <img src={StarIcon} alt="star" />
                        <img src={StarIcon} alt="star" />
                        <p>(12)</p>
                    </div>
                    <div className="product-price">
                        <p className="original-price">12 300 Ft</p>
                        <p className="actual-price">10 900 Ft</p>
                    </div>
                    <button>KOSÁRBA</button>
                </div>
                <div className="product">
                    <img src="https://picsum.photos/400/400" alt="product" />
                    <p className="product-name">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                    <p className="product-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua incididunt ut. </p>
                    <div className="product-rating">
                        <img src={StarIcon} alt="star" />
                        <img src={StarIcon} alt="star" />
                        <img src={StarIcon} alt="star" />
                        <img src={StarIcon} alt="star" />
                        <img src={StarIcon} alt="star" />
                        <p>(12)</p>
                    </div>
                    <div className="product-price">
                        <p className="original-price">12 300 Ft</p>
                        <p className="actual-price">10 900 Ft</p>
                    </div>
                    <button>KOSÁRBA</button>
                </div>
                <div className="product">
                    <img src="https://picsum.photos/400/400" alt="product" />
                    <p className="product-name">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                    <p className="product-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua incididunt ut. </p>
                    <div className="product-rating">
                        <img src={StarIcon} alt="star" />
                        <img src={StarIcon} alt="star" />
                        <img src={StarIcon} alt="star" />
                        <img src={StarIcon} alt="star" />
                        <img src={StarIcon} alt="star" />
                        <p>(12)</p>
                    </div>
                    <div className="product-price">
                        <p className="original-price">12 300 Ft</p>
                        <p className="actual-price">10 900 Ft</p>
                    </div>
                    <button>KOSÁRBA</button>
                </div>
                <div className="product">
                    <img src="https://picsum.photos/400/400" alt="product" />
                    <p className="product-name">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                    <p className="product-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua incididunt ut. </p>
                    <div className="product-rating">
                        <img src={StarIcon} alt="star" />
                        <img src={StarIcon} alt="star" />
                        <img src={StarIcon} alt="star" />
                        <img src={StarIcon} alt="star" />
                        <img src={StarIcon} alt="star" />
                        <p>(12)</p>
                    </div>
                    <div className="product-price">
                        <p className="original-price">12 300 Ft</p>
                        <p className="actual-price">10 900 Ft</p>
                    </div>
                    <button>KOSÁRBA</button>
                </div>
            </div>
            <button className="on-sale-button">ÖSSZES AKCIÓS TERMÉK <img src={BlackButtonArrow} alt="arrow" /></button>
        </div>
    )
}