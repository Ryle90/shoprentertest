import Arrow from '../icon/arrow.svg';
import SearchIcon from '../icon/searchIcon.svg';
import HumanIcon from '../icon/humanIcon.svg';
import HeartIcon from '../icon/heartIcon.svg';
import BagIcon from '../icon/bagIcon.svg';
import SeperatorIcon from '../icon/seperatorIcon.svg';

export default function Header() {
    return (
        <header className='Header'>
            <div className="upper-content-container">
                <div className="header-information-container">
                    <p className="phone-number">09 876 543 210</p>
                    <a href='/'>Kapcsolat</a>
                    <img src={SeperatorIcon} alt="sep" />
                    <a href='/'>Rólunk</a>
                    <img src={SeperatorIcon} alt="sep" />
                    <a href='/'>Fizetés, szállítás</a>
                    <img src={Arrow} alt="arrow" />
                </div>
                <div>
                <h1><span>TESZT</span>TÉMA</h1>

                </div>
                <div className="header-shopping-container">
                    <input
                        className="search-input"
                        type="text"
                        name="search"
                        placeholder="keresés..."
                    />
                    <img src={SearchIcon} alt="search" />
                    <img src={HumanIcon} alt="human" />
                    <img src={HeartIcon} alt="heart" />
                    <img src={BagIcon} alt="bag" />
                </div>
            </div>
            <div className="lower-content-container">
                <a href="/">ARCÁPOLÁS</a>
                <a href="/">TESTÁPOLÁS</a>
                <a href="/">HAJÁPOLÁS</a>
                <a href="/">SMINK</a>
                <a href="/">BŐRTÍPUSOK</a>
                <a href="/"> ÚJDONSÁGOK </a>
                <a href="/"> FÉRFIAKNAK</a>
                <a href="/">BABA-MAMA</a>
                <a href="/"> AJÁNDÉK ÖTLETEK</a>
                <a href="/">MÁRKÁK</a>
                <a href="/">AKCIÓ</a>
            </div>
        </header>
    )
}