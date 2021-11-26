import './TimeLine.css';
import { CardTracking } from '../card-tracking/CardTracking';
import { If } from '../if/If';

export const TimeLine = (props) => {

    return (
        <>  
            <div className="timeline">
                <If condition={props.tracking?.length}>
                    {props.tracking?.map((track, index) => <CardTracking key={index} track={track} isOdd={index}/>)}
                </If>
            </div>
        </>
    );
};
