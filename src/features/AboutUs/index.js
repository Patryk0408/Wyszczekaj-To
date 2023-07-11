import { Wrapper, Description, Title, TitleRed, Paragraph, Dogs } from './styled'
import dogsPhoto from '../../img/O-NAS.jpg'

const AboutUs = ({ content }) => {
	return (
		<Wrapper>
			<Dogs src={dogsPhoto} alt='Dogs' />
			<Description>
				<Title>
					Czym się
					<TitleRed> zajmujemy?</TitleRed>
				</Title>
				<Paragraph>{content}</Paragraph>
			</Description>
		</Wrapper>
	)
}

export default AboutUs
