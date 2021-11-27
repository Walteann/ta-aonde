import "./InputSearch.css";

export const InputSearch = (props) => {
    return (
        <div className="input-search">
            <input
                type="text"
                onChange={(event) => props.inputChange(event)}
                placeholder="Ex: AA123456785BR"
            />
            <span
                className="fas fa-search input-search-icon-search"
                onClick={(event) => props.iconClick(event)}
            ></span>
        </div>
    );
};
