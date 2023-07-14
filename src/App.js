import Header from './common/Header'
import AboutUs from './features/AboutUs'
import Home from './features/Home'
import Offer from './features/Offer'
import Contact from './features/Contact'

function App() {
	return (
		<div>
			<Header />
			<Home />
			<AboutUs content='Witaj w Centrum Szkolenia Psów Wyszczekaj To! Oferuję spersonalizowane szkolenia oparte na metodzie pozytywnego wzmocnienia dla psów w każdym wieku i rasie. Dzięki mojemu doświadczeniu i wiedzy zapewniam kompleksową pomoc w rozwiązywaniu problemów behawioralnych oraz osiąganiu celów związanych z posłuszeństwem. Dołącz do naszej społeczności miłośników psów i odkryj potencjał swojego pupila dzięki moim skutecznym programom szkoleniowym. Skontaktuj się ze mną już dziś, aby rozpocząć swoją przygodę w budowaniu silniejszej więzi i posłusznego towarzysza.' />
			<Offer />
			<Contact />
		</div>
	)
}

export default App
