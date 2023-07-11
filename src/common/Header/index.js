import { Wrapper, Logo, Nav } from './styled'
import pageLogo from '../../img/logo.png'

const Header = () => {
	return (
		<Wrapper>
			<Logo src={pageLogo} />
			<Nav>
				<li>O nas</li>
				<li>Oferta</li>
				<li>Kontakt</li>
			</Nav>
		</Wrapper>
	)
}

export default Header
