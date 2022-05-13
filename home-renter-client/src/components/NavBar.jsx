export default function NavBar() {
    return(
        <div className="nav--container">
            <div className="left--nav">
                <ul>
                    <li>Buying</li>
                    <li>Renting</li>
                    <li>Selling</li>
                </ul>
            </div>
            <div className="center--nav">
                <h2 className="logo">HomeRenter</h2>
            </div>
            <div className="right--nav">
                <ul>
                    <li>About Us</li>
                    <li>Services</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    )
}