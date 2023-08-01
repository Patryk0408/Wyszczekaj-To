import { Wrapper, Title, TitleWhite, Offers, OfferItem, OfferTitle, OfferDescription, OfferStar } from './styled'
import offer from '../../myOffer.json'

const Offer = () => {
	const myOffer = offer

	return (
		<Wrapper id='Offer'>
			<Title>
				Przejrzyj <TitleWhite>naszą</TitleWhite> ofertę
			</Title>
			<Offers>
				{myOffer.map(offers => (
					<OfferItem key={offers.id}>
						<OfferTitle>{offers.title}</OfferTitle>
						<OfferDescription>{offers.content}</OfferDescription>
						<OfferStar>{offers.star}</OfferStar>
					</OfferItem>
				))}
			</Offers>
		</Wrapper>
	)
}

export default Offer
