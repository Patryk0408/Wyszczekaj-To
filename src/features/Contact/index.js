import {
	Wrapper,
	Background,
	ContactWrapper,
	TextWrapper,
	Title,
	TitleSpan,
	TitleParagraph,
	Description,
} from './styled'
import Form from './Form'

const Contact = () => {
	return (
		<Wrapper>
			<Background />
			<ContactWrapper>
				<TextWrapper>
					<Title>
						Umów się na <br />
						<TitleSpan>darmową</TitleSpan> <TitleParagraph>konsultacje telefoniczną</TitleParagraph>
					</Title>
					<Description>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi nobis cumque quia dolorum atque eum laborum
						ratione totam explicabo maiores id a sit corrupti recusandae alias, quas, aperiam amet provident!
					</Description>
				</TextWrapper>
				<Form />
			</ContactWrapper>
		</Wrapper>
	)
}

export default Contact
