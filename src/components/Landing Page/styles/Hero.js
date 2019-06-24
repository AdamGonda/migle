import Style from 'styled-components'

export const Wrapper = Style.div`
  width: 576px;
  height: 230px;
  position: relative;
  grid-row: 7 / span 2;

  animation: showUp 1s ease-in;

  @keyframes showUp {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  img {
      width: 100%;
      margin-top: -50px;
  }

  h1 {
      font-size: 25px;
      font-weight: 700;
      margin: 0px;
  }

  h2 {
      font-weight: 300;
      font-size: 15px;
      margin: 0px;
  }

  div {
      text-align: center;
      color: white;
      position: absolute;
      top: 85px;

  }
`
