import glsLogo from '../icon/glsLogo.svg';
import dpdLogo from '../icon/dpdLogo.svg';
import paypalLogo from '../icon/paypalLogo.svg';
import mastercardLogo from '../icon/mastercardLogo.svg';
import maestroLogo from '../icon/maestroLogo.svg';
import honapwebaruhazaLogo from '../icon/honapwebaruhazaLogo.svg';
import arukeresoLogo from '../icon/arukeresoLogo.svg';

export default function BottomLogoBar () {
    return (
        <div className="bottom-logo-bar">
            <img src={glsLogo} alt="gls" />
            <img src={dpdLogo} alt="dpd" />
            <img src={paypalLogo} alt="paypal" />
            <img src={mastercardLogo} alt="mastercard" />
            <img src={maestroLogo} alt="maestro" />
            <img src={honapwebaruhazaLogo} alt="hónapwebáruháza" />
            <img src={arukeresoLogo} alt="árukereső" />
        </div>
    )
}