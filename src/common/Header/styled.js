import styled from 'styled-components'

export const Wrapper = styled.div`
	width: 100%;
	height: 100px;
	display: flex;
	justify-content: space-between;
	position: fixed;
	background-color: ${({ theme }) => theme.color.white};
	z-index: 1;
	box-shadow: 0px 3px 20px #666666; /*do zmiany jeszcze*/
`

export const Logo = styled.img`
	height: 100px;
	padding: 10px;
`

export const Nav = styled.ul`
	display: flex;
	gap: 75px;
	align-items: center;
	font-weight: 700;
	font-size: 24px;
	margin-right: 100px;
	list-style-type: none;

	@media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
		display: none;
	}
`

export const NavItem = styled.li`
	width: max-content;
`
