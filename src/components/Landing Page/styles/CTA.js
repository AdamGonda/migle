import Style from 'styled-components'

export const Wrapper = Style.div`
  color:white;
  grid-row: 9 / 10;
  align-self: end;

  animation: showUp 1.5s ease-in;

  @keyframes showUp {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`

export const Bottom = Style.div`
  padding-left: 10px;
  font-size: 13px;
  width: 100px;
  display: flex;
  justify-content: center;

  span {
    margin: 0px auto;
    color: white;
    display: inline-block;
    margin: 0px auto;
  }
`