const footerStyle = {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
    height: '170px',
    justifyContent: 'flex-end'
};

const iconSocialMedia = {
    cursor: "pointer",
    color: "#5f5f5f",
    margin: "10px",
};

const footerLabel = {
    fontSize: "10px",
    color: "#EEEEEE29",
    margin: "5px",
};

const redirectTo = (link) => {
    window.location = link;
};

export const Footer = () => (
    <footer style={footerStyle}>
        <div>
            <span
                onClick={() => redirectTo('https://br.linkedin.com/in/walteann-costa')}
                style={iconSocialMedia}
                className="fab fa-linkedin"
            ></span>
            <span
                onClick={() => redirectTo('https://github.com/Walteann/ta-aonde')}
                style={iconSocialMedia}
                className="fab fa-github"
            ></span>
        </div>
        <label style={footerLabel}>Developer by Walteann</label>
    </footer>
);
