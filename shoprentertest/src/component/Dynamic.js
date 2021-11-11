import ButtonArrowIcon from '../icon/buttonArrowIcon.svg';

export default function Dynamic () {
    return (
        <div className="dynamic">
            <h2>A TERMÉSZETES SZÉPSÉGÉRT</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
            <button>MEGNÉZEM <img src={ButtonArrowIcon} alt="arrow" /></button>
        </div>
    )
}