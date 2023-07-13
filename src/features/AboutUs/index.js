import { Wrapper, Description, Title, TitleRed, Paragraph, Dogs, Empty } from './styled'
import dogsPhoto from '../../img/O-NAS.jpg'

const AboutUs = ({ content }) => {
	return (
		<Wrapper id='AboutUs'>
			<Description>
				<Title>
					Czym się
					<TitleRed> zajmujemy?</TitleRed>
				</Title>

				<Dogs src={dogsPhoto} alt='Dogs' />
				<Empty></Empty>
				<Paragraph>{content}</Paragraph>
			</Description>
		</Wrapper>
	)
}

export default AboutUs
