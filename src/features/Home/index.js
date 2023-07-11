import { Wrapper, Description, Title, Training, Paragraph, Background, IconDown } from './styled'

const Home = () => {
	return (
		<Wrapper>
			<Background />
			<Description>
				<Title>
					Centrum <Training>szkolenia</Training> psów
				</Title>
				<Paragraph>U nas dowiesz się jak dogadać się ze swoim psem</Paragraph>
				<IconDown />
			</Description>
		</Wrapper>
	)
}

export default Home
