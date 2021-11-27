import './Tracking.css';
import 'react-toastify/dist/ReactToastify.css';

import { useState } from 'react';
import ReactLoading from 'react-loading';
import { toast, ToastContainer } from 'react-toastify';

import { Footer } from '../../components/footer/Footer';
import { If } from '../../components/if/If';
import { InputSearch } from '../../components/input-search/InputSearch';
import { TimeLine } from '../../components/timeline/TimeLine';
import { TrackingService } from '../../services/TrackingService';
import LogoSvg from './../../assets/logo.svg';

export const Tracking = () => {
    const [tracking, setTracking] = useState([]);
    const [payload, setPayload] = useState("");
    const [numero, setNumero] = useState("");
    const [loading, setLoading] = useState(false);

    const getTracking = async (payload) => {

        setLoading(true);
        
        try {
            const { data } = await TrackingService.getTracking(payload);
            const { evento, numero } = data.objeto[0];
            setTracking([...evento]);
            setNumero(numero);
            setLoading(false);
        } catch(e) {
            setLoading(false);
            toast.error('Algo deu errado! tente novamente mais tarde.', {
                position: toast.POSITION.TOP_CENTER,
                theme: 'colored'
            });
        }

    };

    const handlerInput = (event) => {
        setPayload(event.target.value);
    };

    const submitForm = (event) => {
        event.preventDefault();

        if (!!payload) {
            getTracking({
                code: payload,
                type: "LS",
            });
        } else {
            return;
        }
    };

    return (
        <>
            <header>
                <img className="logo" src={LogoSvg} alt="" />
                <form onSubmit={(event) => submitForm(event)}>
                    <InputSearch
                        inputChange={(event) => handlerInput(event)}
                        iconClick={(event) => submitForm(event)}
                    />
                </form>
            </header>

            <div className="loading">
                <If condition={loading}>
                    <ReactLoading
                        type="bars"
                        color="#FD7014"
                        height={100}
                        width={150}
                    />
                </If>
            </div>

            <If condition={!loading}>
                <section className="main">
                    <h1 className="numero">{numero}</h1>
                    <TimeLine tracking={tracking} />
                </section>
            </If>
            <ToastContainer />
            <Footer />
        </>
    );
};
