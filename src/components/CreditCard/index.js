// Write your code here
import {useState} from 'react'
import {
  MainContainer,
  CreditCardBackgroundContainer,
  CardHeading,
  HarozontalLine,
  CreditCardContainer,
  CardNumber,
  CardHolderName,
  NameCardHolder,
  FormBackgroundContainer,
  Form,
  FormHeading,
  InputElement,
  BreakLine,
} from './styledComponents'

const CreditCard = () => {
  const [cardNumber, setCardNumber] = useState('')
  const changeCardNumber = event => {
    setCardNumber(event.target.value)
  }
  const [cardHolder, setCardHolder] = useState('')

  const changeCardHolder = event => {
    setCardHolder(event.target.value)
  }
  return (
    <MainContainer>
      <CreditCardBackgroundContainer>
        <CardHeading>CREDIT CARD</CardHeading>
        <HarozontalLine />
        <CreditCardContainer data-testid="creditCard">
          <CardNumber>{cardNumber}</CardNumber>
          <CardHolderName>CARDHOLDER NAME</CardHolderName>
          <NameCardHolder>{cardHolder}</NameCardHolder>
        </CreditCardContainer>
      </CreditCardBackgroundContainer>
      <FormBackgroundContainer>
        <Form>
          <FormHeading>Payment Method</FormHeading>
          <InputElement
            type="text"
            placeholder="Card Number"
            value={cardNumber}
            onChange={changeCardNumber}
          />
          <BreakLine />
          <InputElement
            type="text"
            placeholder="Cardholder Name"
            value={cardHolder}
            onChange={changeCardHolder}
          />
        </Form>
      </FormBackgroundContainer>
    </MainContainer>
  )
}
export default CreditCard
