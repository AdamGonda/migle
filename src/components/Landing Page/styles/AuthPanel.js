import Style from 'styled-components'

export const Wrapper = Style.div`
  display: grid;
  justify-items: center;
  align-self: center;
  font-size: 15px;
  color: white;
  animation: showUp 0.4s ease-in;

  @keyframes showUp {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  div {
    width: 200px ;
    display: grid;
    justify-items: center;
    align-self: center;
    grid-gap: 10px;
  }

  h1 {
    font-size: 35px;
  }

  input {
    display: block;
    text-align: center;
    border: none;
    padding: 5px 10px;
    border-radius: 3px;
  }
`
export const AuthError = Style.div`
  margin-top: 5px;
  padding: 7px 0px;
  font-size: 13px;
  color:yellow;
  font-weight: 600;
  text-align: center;
  border: 1px solid yellow;
`