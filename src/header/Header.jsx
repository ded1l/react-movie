 import "./Header.css"

const Header=()=>{
    return(
        <div>
            <nav>
                <ul>
                    <li><img src="" alt="" /><h1>CINE APP</h1></li>
                    <li>
                        <div className="input-container">
                        <input placeholder="Search..." type="text" />
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    )
 }
 export default Header;