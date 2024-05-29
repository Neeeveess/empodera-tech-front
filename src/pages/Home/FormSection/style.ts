import styled from 'styled-components'

export const FormContainer = styled.section`
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.white};
`
export const FormContent = styled.div`
  margin: 0 200px;
  padding: 80px 0;

  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;

  @media (max-width: 1500px) {
    margin: auto 100px;
  }
  @media (max-width: 1260px) {
    margin: auto 40px;
  }

  h2 {
    font-size: 2.625rem;
    margin-bottom: 2rem;
    text-align: center;
  }
`

export const FormGroup = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  .line {
    width: 100%;
    min-width: 300px;
    display: flex;
    gap: 1rem;

    .item {
      flex: 1;
      span {
        margin-left: 1rem;
        color: #dc3545;
      }
      label {
        font-size: 1rem;
      }
      input,
      select,
      option {
        margin-top: 0.3rem;
        padding: 0.5rem;
        border: none;
        border-radius: 12px;
        width: 100%;
        font-size: 1rem;
      }
    }
  }
  button {
    margin-top: 2rem;
  }
`
