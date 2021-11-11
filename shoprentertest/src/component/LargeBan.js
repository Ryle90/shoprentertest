import ButtonArrowIcon from '../icon/buttonArrowIcon.svg';
import ScrollingArrowLeft from '../icon/scrollingArrowLeft.svg';
import ScrollingArrowRight from '../icon/scrollingArrowRight.svg';
import ScrollingPoint from '../icon/scrollingPoint.svg';

export default function LargeBan () {
    return (
        <div className="large-ban">
            <div className="ban-container">
                <img src={ScrollingArrowLeft} alt="left" />
                <div className="text-container">
                    <h3>LOREM</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    <button>Részletek <img src={ButtonArrowIcon} alt="arrow" /></button>
                </div>
                <div></div>
                <div></div>
                <img src={ScrollingArrowRight} alt="right" />
            </div>
            <div className="scrolling-points">
                <img src={ScrollingPoint} alt="point" />
                <img src={ScrollingPoint} alt="point" />
                <img src={ScrollingPoint} alt="point" />
                <img src={ScrollingPoint} alt="point" />
                <img src={ScrollingPoint} alt="point" />
            </div>
        </div>
    )
}