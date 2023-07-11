import styled from 'styled-components'

export const Wrapper = styled.section`
	padding: 170px 0;
	display: grid;
	grid-template-columns: auto 1fr;
	grid-gap: 100px;
`

export const Description = styled.div`
	max-width: 700px;
`

export const Title = styled.h2`
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
