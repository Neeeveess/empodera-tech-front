import styled from 'styled-components'
interface BgImgProps {
  bgImg: string
}

export const HeroContainer = styled.section<BgImgProps>`
  height: 100%;
  min-height: 800px;
  position: relative;
  z-index: 1;
  display: flex;

  &::before {
    content: '';
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background:
      linear-gradient(260deg, #540983 49.22%, rgba(84, 9, 131, 0.72) 94.65%),
      url(${(props) => props.bgImg}) lightgray 50% / cover no-repeat;
    background-size: cover;
    background-position: center;
    transform: scaleX(-1);
  }
  @media (max-width: 1260px) {
    min-height: 800px;
  }
  @media (max-width: 992px) {
    min-height: initial;
  }
`

export const HeroContent = styled.div`
  display: block;
  width: 100%;
  margin: auto 200px;
  padding: 80px 0;
  flex: 1;

  img {
    position: absolute;
    right: 0;
    bottom: 0;
    object-fit: contain;

    width: 50%;
  }

  @media (max-width: 1500px) {
    margin: auto 100px;
  }
  @media (max-width: 1260px) {
    margin: auto 40px;
    /* padding: 60px 0; */
  }
  @media (max-width: 992px) {
    img {
      display: none;
    }
  }
`

export const HeroText = styled.div`
  max-width: 60%;
  color: ${(props) => props.theme.white};

  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 2rem;

  h2 {
    font-size: 1.3125;
    @media (max-width: 1260px) {
      font-size: 1.25;
    }
  }

  h1 {
    font-size: 3.75rem;
    line-height: 1;
    @media (max-width: 1260px) {
      font-size: 3rem;
    }
  }

  p {
    font-size: 1.25rem;
    line-height: 1.4;
    @media (max-width: 1260px) {
      font-size: 1.125rem;
    }
  }

  .group-buttons {
    display: flex;
    gap: 1rem;
    @media (max-width: 992px) {
      flex-wrap: wrap;
    }
  }

  @media (max-width: 992px) {
    max-width: 100%;

    img {
      display: none;
    }
  }
`
