import {
	Wrapper,
	Background,
	ContactWrapper,
	TextWrapper,
	Title,
	TitleSpan,
	TitleParagraph,
	Description,
	Wave,
	Send,
	SendTitle,
	Mail,
	SocialMedia,
	SocialMediaContainer,
	Connection,
	ConnectionTitle,
	ConnectionItem,
	SocialTitle,
	Copyright,
	CopyrightLink,
} from './styled'
import { ReactComponent as FacebookIcon } from '../../img/facebook.svg'
import { ReactComponent as InstagramIcon } from '../../img/instagram.svg'

const Contact = () => {
	return (
		<>
			<Wrapper id='Contact'>
				<Background />
				<ContactWrapper>
					<TextWrapper>
						<Title>
							Umów się na <br />
							<TitleSpan>darmową</TitleSpan> <TitleParagraph>konsultacje telefoniczną</TitleParagraph>
						</Title>
						<Description>Nie rozumiesz co twój pies ma ci do powiedzenia? Rozwiążmy tę zagadkę razem!!!</Description>
					</TextWrapper>
					<Send>
						<SendTitle>Napisz do nas!</SendTitle>
						<Mail href='mailto:wyszczekajto@opoczta.pl'>wyszczekajto@opoczta.pl</Mail>
					</Send>
				</ContactWrapper>
				<Wave>
					<SocialMediaContainer>
						<SocialMedia smaller>
							<InstagramIcon width='40' height='40' /> <SocialTitle>@wyszczekajto_szkoleniepsow</SocialTitle>
						</SocialMedia>
						<SocialMedia>
							<FacebookIcon width='30' height='30' />
							<SocialTitle>Wyszczekaj To - Centrum Szkolenia Psów</SocialTitle>
						</SocialMedia>
					</SocialMediaContainer>
					<Connection>
						<ConnectionTitle>Kontakt</ConnectionTitle>
						<ConnectionItem>( +48 ) 574-438-867 </ConnectionItem>
						<ConnectionItem>wyszczekajto@opoczta.pl</ConnectionItem>
					</Connection>
				</Wave>
				<Copyright>
					&copy; Powered by{' '}
					<CopyrightLink href='https://www.linkedin.com/in/patryk-krawczyk-b651b8260/' target='blank'>
						Patryk0408
					</CopyrightLink>
				</Copyright>
			</Wrapper>
		</>
	)
}

export default Contact
