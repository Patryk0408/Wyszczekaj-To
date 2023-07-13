import { Wrapper, Logo, Nav, NavItem, MenuMobile } from './styled'
import pageLogo from '../../img/logo.png'
import { Link } from 'react-scroll'
import { useState } from 'react'

const Header = () => {
	const [menuActive, setMenuActive] = useState(false)

	const toggleMenuActive = () => {
		setMenuActive(!menuActive)
	}

	return (
		<Wrapper>
			<Link to='Home' smooth={true} duration={500} offset={-75}>
				<Logo src={pageLogo} href='logo' />
			</Link>
			<Nav active={menuActive}>
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
					<Link to='Contact' smooth={true} duration={500}>
						Kontakt
					</Link>
				</NavItem>
			</Nav>
			<MenuMobile className='material-symbols-outlined' onClick={toggleMenuActive}>
				menu
			</MenuMobile>
		</Wrapper>
	)
}

export default Header
