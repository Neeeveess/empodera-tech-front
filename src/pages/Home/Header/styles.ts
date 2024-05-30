import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background-color: transparent;
  position: fixed;
  width: 100%;
  z-index: 10;
  top: 0;
  left: 0;

  transition: all 0.2s;
  &.scrolled {
    background-color: ${(props) => props.theme.primary};
  }
  @media (max-width: 992px) {
    background-color: ${(props) => props.theme.primary};
  }
`

export const HeaderContent = styled.div`
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
  .menu-button {
    display: none;

    @media (max-width: 992px) {
      display: block;
      background: none;
      border: none;
      color: ${(props) => props.theme.white};
    }
  }
`

export const HeaderLogo = styled.a`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.white};
  text-decoration: none;
  cursor: pointer;

  font-size: 1.25rem;
`

export const HeaderNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 3rem;

  a {
    color: ${(props) => props.theme.white};
    text-decoration: none;
    font-weight: 700;
    transition: all 0.2s;
    cursor: pointer;
  }
  :hover {
    filter: brightness(0.9);
  }
  @media (max-width: 992px) {
    display: none;

    &.open {
      display: block;
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      padding: 2rem 0;

      background-color: ${(props) => props.theme.primary};

      display: flex;
      flex-direction: column;
      gap: 2rem;
    }
  }
`
