import { Wrapper, Logo, Nav, NavItem } from './styled'
import pageLogo from '../../img/logo.png'

const Header = () => {
	return (
		<Wrapper>
			<Logo src={pageLogo} />
			<Nav>
				<NavItem>O nas</NavItem>
				<NavItem>Oferta</NavItem>
				<NavItem>Kontakt</NavItem>
			</Nav>
		</Wrapper>
	)
}

export default Header
