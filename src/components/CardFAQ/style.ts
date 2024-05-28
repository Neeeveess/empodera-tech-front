import styled from 'styled-components'

export const CardFAQContainer = styled.details`
  background-color: ${(props) => props.theme.white};
  color: ${(props) => props.theme.black};
  padding: 1rem;
  border-radius: 12px;
  max-width: 1200px;
  width: 100%;
  margin: auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  summary {
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style: none;
    font-size: 1.25rem;
    font-weight: 700;
    cursor: pointer;
    @media (max-width: 1260px) {
      font-size: 1rem;
    }
  }

  p {
    margin-top: 1rem;
    font-size: 1rem;
    font-weight: 400;
  }
`
