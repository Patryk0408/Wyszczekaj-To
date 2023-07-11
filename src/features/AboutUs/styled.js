import styled from 'styled-components'

export const Wrapper = styled.section`
	padding: 170px 20px;
	display: flex;
	justify-content: center;
	grid-gap: 100px;
	flex-wrap: wrap;
`

export const Dogs = styled.img`
	max-width: 700px;
	width: 100%;
	height: 100%;
`

export const Description = styled.div`
	max-width: 600px;
	padding: 0 20px 0 0;
`

export const Title = styled.h2`
	text-align: center;
	text-transform: uppercase;
	font-size: 90px;
`

export const TitleRed = styled.span`
	font-family: 'Chewy', cursive;
	color: ${({ theme }) => theme.color.mandy};
	text-transform: capitalize;
`

export const Paragraph = styled.p`
	font-size: 24px;
	font-weight: 700;
`
