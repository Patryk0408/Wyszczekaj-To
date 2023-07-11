import styled from 'styled-components'
import contactImage from '../../img/KONTAKT.png'

export const Wrapper = styled.div`
	position: relative;
	padding: 0 0 400px;
`

export const Background = styled.div`
	background-image: url(${contactImage});
	height: 100%;
	width: 100%;
	position: absolute;
	bottom: 0;
	background-size: cover;
	filter: brightness(0.3);
`

export const ContactWrapper = styled.div`
	display: flex;
	justify-content: center;
	position: relative;
	padding: 200px 0 0;
	flex-wrap: wrap;
	gap: 200px;
`

export const TextWrapper = styled.div`
	color: ${({ theme }) => theme.color.white};
	max-width: 550px;
`

export const Title = styled.h2`
	font-size: 70px;
	text-transform: uppercase;
	padding: 0 0 50px;
	margin: 0;
`

export const TitleSpan = styled.span`
	font-family: 'Chewy', cursive;
	color: ${({ theme }) => theme.color.mandy};
	text-transform: capitalize;
	font-size: 125px;
	line-height: 0.7;
`

export const TitleParagraph = styled.p`
	font-size: 34px;
	margin: 0;
`

export const Description = styled.div`
	font-size: 18px;
	font-weight: 700;
`
