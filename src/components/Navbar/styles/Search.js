import Style from 'styled-components'

const strechTransition = 0.2

export const Wrapper = Style.div`
  position: relative;
  padding: 0;
  margin-left: 15px;
  display: flex;
  align-items: center;

  p {
      display: inline;
      position:absolute;
  }

  img {
    position:absolute;
    height: 12px;
    left: 1px;
    margin-left: 9px;
      
  }

  input {
    text-align: center;
    font-size: 16px;
    padding-bottom: 3px;
    padding-left: 26px;
    padding-top: 2px;
    padding-right: 7px;
    font-weight: 300;
    position: absolute;
    width: 150px !important;
    caret-color: white;
    color: white;
    background-color: rgba(0,0,0,0);
    border: 2px solid white;
    border-radius: 20px;
    width: 157px;
    height: 29px;
    transition-property: width;
    transition-duration: ${strechTransition}s;
  }

  input::placeholder {
    color: white;
  }

  input:focus {
    outline: none !important;
    width: 210px !important;
    transition-property: width;
    transition-duration: ${strechTransition}s;
  }
`