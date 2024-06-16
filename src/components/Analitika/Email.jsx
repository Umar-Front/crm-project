import { email } from "../../mock/email"
import Subtitle from "../Generics/Subtitle"
import { Info, Section, Wrapper } from "./emailStyle"


const Email = () => {
  return (
    <Wrapper>
      {email.map((value) => {
        return (
          <Info key={value.id}>
            <Section>
              <Info.Img src={value.src} />
              <div>
                <Subtitle size={'14px'}>{value.name}</Subtitle>
                <Subtitle size={'14px'} color={'grey'}> {value.status}</Subtitle>
              </div>
            </Section>
            <Info.SMS>{value.sms}</Info.SMS>
            <Section end>{value.date}</Section>
          </Info>
        )
      })}
    </Wrapper>
  )
}

export default Email
