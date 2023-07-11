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
			<AboutUs
				content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi debitis explicabo dolore eveniet atque
					reiciendis dignissimos repudiandae corporis quia praesentium molestias, laborum nobis accusantium esse fuga
					ipsa dolores autem placeat.'
			/>
			<Offer />
			<Contact />
		</div>
	)
}

export default App
