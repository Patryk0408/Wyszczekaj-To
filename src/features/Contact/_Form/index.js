import { Wrapper, Title, Input, FormWrapper, InputTitle } from './styled'

const Form = () => {
	return (
		<Wrapper>
			<Title>Formularz kontaktowy</Title>
			<FormWrapper>
				<InputTitle>Imię i nazwisko</InputTitle>
				<Input placeholder='Jan Kowalski' />
				<InputTitle>Numer telefonu</InputTitle>
				<Input placeholder='123-456-789' />
				<InputTitle>Adres email</InputTitle>
				<Input placeholder='jankowalski@gmail.com' />
			</FormWrapper>
		</Wrapper>
	)
}

export default Form
