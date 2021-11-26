import LogoSvg from './../../assets/logo.svg';
import { InputSearch } from '../../components/input-search/InputSearch';
import './Tracking.css';
import { TimeLine } from '../../components/timeline/TimeLine';

export const Tracking = () => {

    return (
        <> 
            <header>
                <img className="logo" src={LogoSvg} alt="" />
                <form>
                    <InputSearch />
                </form>
            </header>

            <section className="main">
                <TimeLine />
            </section>
        </>
    )
}