import styled from 'styled-components'

export const Wrapper = styled.section`
	padding: 120px 20px;
	display: flex;
	justify-content: center;
	grid-gap: 30px;
	flex-direction: column;

	@media (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
		flex-direction: row;
	}
`

export const Dogs = styled.img`
	max-width: 600px;
	width: 100%;
	height: 100%;
	margin: 0 auto;
	@media (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
		max-width: 700px;
	}
`

export const Description = styled.div`
	max-width: 600px;
	padding: 0 0 0 0;
	margin: 0 auto;
`

export const Title = styled.h2`
	text-align: center;
	text-transform: uppercase;
	font-size: 50px;
	position: absolute;
	bottom: -70px;
	width: 100%;
	left: 0;
	right: 0;

	@media (min-width: ${({ theme }) => theme.breakpoint.mobile}) {
		font-size: 75px;
		bottom: -270px;
	}

	@media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
		font-size: 90px;
	}
	@media (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
		font-size: 90px;
		position: relative;
		bottom: unset;
	}
`

export const TitleRed = styled.span`
	font-family: 'Chewy', cursive;
	color: ${({ theme }) => theme.color.mandy};
	text-transform: capitalize;
`

export const Paragraph = styled.p`
	font-size: 24px;
	font-weight: 700;
	text-align: center;
`
