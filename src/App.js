import { Switch, Route } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage.component";
import Shop from "./pages/shoppage/Shop.component";

function App() {
	return (
		<div>
			<Switch>
				<Route exact path="/" component={Homepage} />
				<Route exact path="/shop" component={Shop} />
			</Switch>
		</div>
	);
}

export default App;
