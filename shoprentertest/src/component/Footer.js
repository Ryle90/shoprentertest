import { useState, useEffect } from 'react';

import SeperatorIcon from '../icon/seperatorIcon.svg';
import FacebookLogo from '../icon/facebookLogo.svg';
import InstaLogo from '../icon/instaLogo.svg';
import YoutubeLogo from '../icon/youtubeLogo.svg';
import MessengerLogo from '../icon/messengerLogo.svg';
import TwitterLogo from '../icon/twitterLogo.svg';

export default function Footer () {
    const [currentYear, setCurrentYear] = useState(null);

    useEffect(() => {
        const date = new Date();
        const actualYear = date.getFullYear();
        setCurrentYear(actualYear)
    }, [])

    return (
        <footer className="footer">
            <div className="link-container">
                <a href="/">Kapcsolat</a>
                <img src={SeperatorIcon} alt="sep" />
                <a href="/">Akciós termékek</a>
                <img src={SeperatorIcon} alt="" />
                <a href="/">Adatvédelmi nyilatkozat</a>
                <img src={SeperatorIcon} alt="" />
                <a href="/">Vásárlási feltételek</a>
                <img src={SeperatorIcon} alt="" />
                <a href="/">Fizetés, szállítás</a>
                <img src={SeperatorIcon} alt="" />
                <a href="/">Adatvédelem</a>
                <img src={SeperatorIcon} alt="" />
                <a href="/">Segítség</a>
                <img src={SeperatorIcon} alt="" />
                <a href="/">Rólunk</a>
            </div>
            <div className="connection-container">
                <p>4028 Debrecen, Kassai út 129</p>
                <img src={SeperatorIcon} alt="" />
                <a href = "mailto: info@shoprenter.hu">info@shoprenter.hu</a>
                <img src={SeperatorIcon} alt="" />
                <p>+36-1/234-5012</p>
                <img src={SeperatorIcon} alt="" />
                <p>Nyitvatartás: h-p 9-17</p>
            </div>
            <div className="social-media-container">
                <img src={FacebookLogo} alt="fb" />
                <img src={InstaLogo} alt="insta" />
                <img src={YoutubeLogo} alt="yt" />
                <img src={MessengerLogo} alt="messenger" />
                <img src={TwitterLogo} alt="twitter" />
            </div>
            <p className="copyright">&copy; {currentYear} Teszt téma</p>
            <div className="language-container">
                <a href="/">HU</a>
                <img src={SeperatorIcon} alt="" />
                <a href="/">EN</a>
                <select name="currency" id="currency">
                    <option value="huf">Huf</option>
                    <option value="eur">Eur</option>
                </select>
            </div>
            <p className="info-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
        </footer>
    )
}