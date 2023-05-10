// import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <h1>Página Inicial</h1>

            <nav>
                <ul>
                    <li>
                        <Link to="/Atv01">Atividade 1</Link>
                    </li>
                    <li>
                        <Link to="/Atv02">Atividade 2</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Home;