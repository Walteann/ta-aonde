import "./InputSearch.css";

export const InputSearch = (props) => {
    return (
        <div className="input-search">
            <input
                type="text"
                placeholder="Informe código de rastreio Ex: AA123456785BR"
                onChange={(event) => props.inputChange(event)}
            />
            <span className="fas fa-search input-search-icon-search" onClick={(event) => props.iconClick(event)}></span>
        </div>
    );
};
