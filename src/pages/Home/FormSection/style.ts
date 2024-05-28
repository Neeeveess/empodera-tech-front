import styled from 'styled-components'

export const FormContainer = styled.form`
  background-color: ${(props) => props.theme.white};
  color: ${(props) => props.theme.black};
`
export const FormContent = styled.div`
  margin: 0 200px;
  padding: 8px 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1500px) {
    margin: auto 100px;
  }
  @media (max-width: 1260px) {
    margin: auto 40px;
  }
`
