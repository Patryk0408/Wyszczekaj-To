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
					</OfferItem>
				))}
			</Offers>
			<OfferStar>
				* Warunkiem uczestnictwa psa są szczepienia na choroby zakaźne. W cenie szkolenia jest 7 godzinnych spotkań.
				Spotkania będą odbywać się tego samego dnia, o stałej godzinie. Każdy uczestnik dostanie w mailu liste rzeczy,
				które należy przygotować na spotkanie, plan spotkania a także regulamin. Zajęcia będą odbywać się w 3
				osobowo-psich grupach. Każdy uczestnik na koniec szkolenia dostanie dyplom uczestnictwa.
			</OfferStar>
		</Wrapper>
	)
}

export default Offer
