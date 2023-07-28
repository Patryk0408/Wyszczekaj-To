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
			<AboutUs content='Witamy w Wyszczekaj To Centrum Szkolenia Psów, gdzie zrozumienie psiej komunikacji jest kluczem do skutecznego treningu i budowania głębokiej więzi z naszymi czworonożnymi przyjaciółmi! Wierzymy, że komunikacja jest kluczem do udanej relacji z psem. Uczymy właścicieli rozpoznawania subtelnych znaków i sygnałów wysyłanych przez psy, które często wyrażają emocje, potrzeby i zamiary. Poprzez zrozumienie mowy ciała i języka psów, możemy lepiej zareagować na ich sygnały, co prowadzi do efektywniejszego treningu i większej harmonii w naszych interakcjach. Dołącz do nas, aby zrozumieć swojego psa lepiej niż kiedykolwiek wcześniej i zbudować trwałą, pełną zaufania relację między Wami. Czekamy na Was z otwartymi sercami i entuzjazmem!' />
			<Offer />
			<Contact />
		</div>
	)
}

export default App
