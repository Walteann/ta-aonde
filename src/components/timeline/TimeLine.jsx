import './TimeLine.css';
import { CardTracking } from '../card-tracking/CardTracking';
import { useEffect, useState } from 'react';
import { TrackingService } from '../../services/TrackingService';

const MOCK_Tracking = {
    code: "OQ154682804BR",
    type: "LS"
}

export const TimeLine = () => {

    const [tracking, setTracking] = useState([]);
    const [numberTrack, setNumberTrack] = useState('');


    const getTracking = async (payload) => {
        const { data } = await TrackingService.getTracking(payload);

        const { evento } = data.objeto[0];
        setNumberTrack(evento.numero);
        setTracking([...evento]);

    }

    useEffect(() => {
        getTracking(MOCK_Tracking);
    }, []);


    return (
        <>
            <div className="timeline">
                    {tracking.map((track, index) => <CardTracking key={index} track={track} isOdd={index}/>)}
            </div>
        </>
    );
};
