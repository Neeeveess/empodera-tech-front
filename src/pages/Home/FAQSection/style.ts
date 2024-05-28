import styled from 'styled-components'

export const FAQContainer = styled.section`
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.white};
`

export const FAQContent = styled.div`
  margin: 0 200px;
  padding: 8rem 0;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 1500px) {
    margin: auto 100px;
  }
  @media (max-width: 1260px) {
    margin: auto 40px;
    padding: 40px 0;
  }
`
