import styled from 'styled-components'

export const Wrapper = styled.div`
	color: ${({ theme }) => theme.color.white};
`

export const Input = styled.input`
	max-width: 100%;
	padding: 15px;
	border-radius: 30px;
	margin: 0 0 10px;
`

export const FormWrapper = styled.div`
	display: grid;
`

export const Title = styled.h2`
	text-transform: uppercase;
`

export const InputTitle = styled.span`
	padding: 0 0 5px 20px;
`
