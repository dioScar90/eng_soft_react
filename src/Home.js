import { Link } from "react-router-dom";

export default function Home() {
	return (
		<div className="bg-black flex flex-col justify-center items-center h-screen text-white">
			<div>
				<div>
					<h1 className="text-5xl">Página Inicial</h1>
				</div>

				<div>
					<nav>
						<ul className="flex justify-evenly py-5">
							<li className="botao">
								<Link to="/Atv01">Atividade 1</Link>
							</li>
							
							<li className="botao">
								<Link to="/Atv02">Atividade 2</Link>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</div>
	);
}

