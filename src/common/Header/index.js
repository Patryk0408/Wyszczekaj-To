import { Wrapper, Logo, Nav, NavItem } from './styled'
import pageLogo from '../../img/logo.png'
import { Link } from 'react-scroll'

const Header = () => {
	return (
		<Wrapper>
			<Logo src={pageLogo} href='logo' />
			<Nav>
				<NavItem>
					<Link to='AboutUs' smooth={true} duration={500} offset={-75}>
						O nas
					</Link>
				</NavItem>
				<NavItem>
					<Link to='Offer' smooth={true} duration={500} offset={-75}>
						Oferta
					</Link>
				</NavItem>
				<NavItem>
					<Link to='Contact' smooth={true} duration={500} offset={-75}>
						Kontakt
					</Link>
				</NavItem>
			</Nav>
		</Wrapper>
	)
}

export default Header
