import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Home";
import Atv01 from "./components/atv01/Atv01";
import Atv02 from "./components/atv02/Atv02";
import Atv05 from "./components/atv05/Atv05";
import Atv07 from "./components/atv07/Atv07";

export default function MinhasRotas() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/atv01" element={<Atv01 />} />
				<Route path="/atv02" element={<Atv02 />} />
				<Route path="/atv05" element={<Atv05 />} />
				<Route path="/atv07" element={<Atv07 />} />
			</Routes>
		</BrowserRouter>
	);
}

