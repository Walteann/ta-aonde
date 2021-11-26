import LogoSvg from './../../assets/logo.svg';
import { InputSearch } from '../../components/input-search/InputSearch';
import './Tracking.css';
import { TimeLine } from '../../components/timeline/TimeLine';
import { useState } from 'react';
import { TrackingService } from '../../services/TrackingService';



export const Tracking = () => {

    const [tracking, setTracking] = useState([]);
    const [payload, setPayload] = useState('');
    const [numero, setNumero] = useState('');

    const getTracking = async (payload) => {
        const { data } = await TrackingService.getTracking(payload);

        const { evento, numero } = data.objeto[0];
        setTracking([...evento]);
        setNumero(numero);
    }


    const handlerInput = (event) => {
        setPayload(event.target.value);
    }

    const submitForm = (event) => {
        event.preventDefault();

        if(!!payload) {

            getTracking({
                code: payload,
                type: "LS"
            });

        } else {
            return;
        }

    }

    return (
        <> 
            <header>
                <img className="logo" src={LogoSvg} alt="" />
                <form onSubmit={(event) => submitForm(event)}>
                    <InputSearch inputChange={(event) => handlerInput(event)} iconClick={(event) => submitForm(event)}/>
                </form>
            </header>

            <section className="main">
                <h1 className="numero">{numero}</h1>
                <TimeLine tracking={tracking}/>
            </section>
        </>
    )
}