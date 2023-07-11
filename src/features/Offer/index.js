import { Wrapper, Title, TitleWhite, Offers, OfferItem, OfferTitle, OfferDescription } from './styled'
import offer from '../../myOffer.json'

const Offer = () => {
	const myOffer = offer

	return (
		<Wrapper>
			<Title>
				Przejrzyj <TitleWhite>naszą</TitleWhite> ofertę
			</Title>
			<Offers>
				{myOffer.map(offers => (
					<OfferItem key={offers.id}>
						<OfferTitle>{offers.title}</OfferTitle>
						<OfferDescription>{offers.content}</OfferDescription>
					</OfferItem>
				))}
			</Offers>
		</Wrapper>
	)
}

export default Offer
