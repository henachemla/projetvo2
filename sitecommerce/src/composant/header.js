import './Header.css'

function Header(){
    return(
        <header className="header">
             <div className="top-bar">
                <p>Téléphone : 06 50 90 41 84</p>
                <p> Email : henachemla@gmail.com </p>
                <p> Levallois-Perret </p>
            </div>
            <nav className="navbar">
                <h1 className="logo">HC</h1>
                <div className="links">
                    <a href="#">Accueil</a>
                    <a href="#">Contact</a>
                </div>
            </nav>
        </header>
    )
}

export default Header;
