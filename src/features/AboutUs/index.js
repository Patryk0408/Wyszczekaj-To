import { Wrapper, Description, Title, TitleRed, Paragraph } from './styled'
import dogsPhoto from '../../img/O-NAS.jpg'

const AboutUs = () => {
	return (
		<Wrapper>
			<img src={dogsPhoto} height='500' alt='Dogs' />
			<Description>
				<Title>
					Czym się <br />
					<TitleRed>zajmujemy?</TitleRed>
				</Title>
				<Paragraph>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi debitis explicabo dolore eveniet atque
					reiciendis dignissimos repudiandae corporis quia praesentium molestias, laborum nobis accusantium esse fuga
					ipsa dolores autem placeat.
				</Paragraph>
			</Description>
		</Wrapper>
	)
}

export default AboutUs
