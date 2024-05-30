import styled from 'styled-components'

export const AboutContainer = styled.section`
  background-color: ${(props) => props.theme.white};
  color: ${(props) => props.theme.black};
`
export const AboutContent = styled.div`
  margin: 0 200px;
  padding: 8rem 0;

  display: flex;
  gap: 8rem;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1500px) {
    margin: auto 100px;
  }
  @media (max-width: 1260px) {
    margin: auto 40px;
    padding: 40px 0;
  }
  @media (max-width: 992px) {
    flex-direction: column;
    gap: 4rem;
  }
`
export const AboutGroupCards = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  flex: 1;
  @media (max-width: 992px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const AboutText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;

  h2 {
    font-size: 2.625rem;
    font-weight: 700;
    color: ${(props) => props.theme.primary};
    @media (max-width: 1260px) {
      font-size: 2.4rem;
    }
    @media (max-width: 992px) {
      text-align: center;
    }
  }

  p {
    font-size: 1.125rem;
    line-height: 1.4;
    @media (max-width: 1260px) {
      font-size: 1rem;
    }
  }

  ul {
    font-size: 1.125rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    @media (max-width: 1260px) {
      font-size: 1rem;
    }
    li {
      margin-left: 1.5rem;
    }
  }
  @media (max-width: 992px) {
    button {
      margin: auto;
    }
  }
`
