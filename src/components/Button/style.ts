import styled from 'styled-components'

export const ButtonPrimary = styled.button`
  background-color: ${(props) => props.theme.white};
  color: ${(props) => props.theme.primary};
  padding: 0.7rem 2rem;
  border: 2px solid ${(props) => props.theme.white};
  border-radius: 0.75rem;
  font-weight: 500;
  cursor: pointer;
  width: fit-content;
  transition: all 0.2s;

  &:hover {
    background-color: transparent;
    color: ${(props) => props.theme.white};
  }
`

export const ButtonPrimaryInverted = styled(ButtonPrimary)`
  margin-top: 1rem;
  background-color: ${(props) => props.theme.primary};
  border-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.white};

  &:hover {
    background-color: ${(props) => props.theme.white};
    color: ${(props) => props.theme.primary};

    filter: none;
  }
`

export const ButtonSecondary = styled(ButtonPrimary)`
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.white};

  &:hover {
    background-color: ${(props) => props.theme.white};
    color: ${(props) => props.theme.primary};

    filter: none;
  }
`

export const ButtonTertiary = styled(ButtonPrimary)`
  padding: 0.5rem 1rem;
  border-radius: 9999px;
`
