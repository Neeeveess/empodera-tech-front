import styled from 'styled-components'

export const CardContainer = styled.article`
  color: ${(props) => props.theme.black};
  padding: 2rem;
  border-radius: 12px;
  border: 2px solid ${(props) => props.theme.primary};
  box-shadow: -2px 1px 4.6px 0px rgba(84, 9, 131, 0.6);

  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;

  p {
    text-align: center;
    font-size: 1.125rem;
    font-weight: 700;
    @media (max-width: 1260px) {
      font-size: 1rem;
    }
  }
`
