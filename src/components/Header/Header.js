import "./Header.css";

const Header = () => {
    return <span
        onClick={() => window.scroll(0, 0)}
        className="header">
        🎥🦉NIGHT-OWL🦉🎥
        <div className="Credit"> ~ created by Mayank Jha😎</div>
        <img className="logo" alt="Logo" src="./logo192.png"/>
    </span>

};

export default Header;

