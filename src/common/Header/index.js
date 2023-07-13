import { Wrapper, Logo, Nav, NavItem, MenuMobile, NavLink } from './styled'
import pageLogo from '../../img/logo.png'
import { useState } from 'react'

const Header = () => {
	const [menuActive, setMenuActive] = useState(false)

	const toggleMenuActive = () => {
		setMenuActive(!menuActive)
	}

	return (
		<Wrapper>
			<NavLink to='Home' smooth={true} duration={500} offset={-75}>
				<Logo src={pageLogo} href='logo' />
			</NavLink>
			<Nav active={menuActive}>
				<NavItem>
					<NavLink to='AboutUs' smooth={true} duration={500} offset={-75}>
						O nas
					</NavLink>
				</NavItem>
				<NavItem>
					<NavLink to='Offer' smooth={true} duration={500} offset={-75}>
						Oferta
					</NavLink>
				</NavItem>
				<NavItem>
					<NavLink to='Contact' smooth={true} duration={500} offset={-75}>
						Kontakt
					</NavLink>
				</NavItem>
			</Nav>
			<MenuMobile className='material-symbols-outlined' onClick={toggleMenuActive}>
				menu
			</MenuMobile>
		</Wrapper>
	)
}

export default Header
