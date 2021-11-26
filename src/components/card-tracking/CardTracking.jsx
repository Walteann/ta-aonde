import './CardTracking.css';

export const CardTracking = ({track, isOdd}) => {

    return (

        <div className={'container ' + (isOdd % 2 ? 'right' : 'left')}>
            <div className="content">
                <span className="date">{track.data} {track.hora}</span>
                <h3 className="description">{track.descricao}</h3>
                <h3 className="detail">{track.detalhe}</h3>
                <p className="destiny">
                    {track.destino?.length ? (`${track.destino[0].cidade} ${track.destino[0].uf}`) : '' } 
                </p>
            </div>
        </div> 
    )
}