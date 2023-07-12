import styled from 'styled-components'
import Baner from '../../img/LANDING-PAGE.png'
import { ReactComponent as Down } from '../../img/stat_minus_3_FILL0_wght400_GRAD0_opsz48.svg'

export const Wrapper = styled.section`
	position: relative;
	padding: 100px 0 0;
`

export const Description = styled.div`
	position: absolute;
	top: 30%;
	display: grid;
	justify-content: center;
	width: 100%;
`

export const Background = styled.div`
	background-image: url(${Baner});
	background-position-x: center;
	width: 100%;
	height: 700px;
	background-size: cover;
	filter: brightness(0.3);

	@media (min-width: ${({ theme }) => theme.breakpoint.mobile}) {
		height: 850px;
	}
`

export const Title = styled.h1`
	margin: 0;
	text-transform: uppercase;
	font-size: 60px;
	text-align: center;
	color: ${({ theme }) => theme.color.white};
	padding: 0 20px;
	@media (min-width: ${({ theme }) => theme.breakpoint.mobile}) {
		font-size: 75px;
	}

	@media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
		font-size: 90px;
	}
`

export const Training = styled.span`
	font-family: 'Chewy', cursive;
	color: ${({ theme }) => theme.color.mandy};
	text-transform: capitalize;
`
export const Paragraph = styled.p`
	font-size: 20px;
	font-weight: 700;
	color: ${({ theme }) => theme.color.white};
	text-align: center;
	padding: 0 20px;
`

export const IconDown = styled(Down)`
	fill: #fff;
	bottom: 150px;
	position: absolute;
	text-align: center;
	width: 100%;
`
