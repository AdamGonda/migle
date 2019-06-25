import Style from 'styled-components'

export const MainBtn = Style.img`
  :hover {
    cursor: pointer;
  }
`

export const Panel = Style.div`
  display: flex ;
  align-items: center;
  width: 350px;
  animation: ShowUp 1.3s ease-in;

  @keyframes ShowUp {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
`

export const SubmitBtn = Style.img`
  margin: 4px 0px 0px 4px !important;
  animation: btnShowUp 0.4s ease-in;

  @keyframes btnShowUp {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  
`

export const CancelBtn = Style.img`
  margin: 4px 0px 0px 3px !important;
  animation: btnShowUp 0.4s ease-in;

  @keyframes btnShowUp {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  
`

export const Input = Style.input`
  height: 36.5px;
  width: 150px;
  display: inline !important;
  border: none !important;
  text-align: center;
  font-size: 18px;
  margin-left: 20px;
  animation: open .4s;
  padding: 0px 10px;

  @keyframes open {
    0% {
      width: 0px;
      opacity: 0;
    }

    100% {
      width: 150px;
      opacity: 1;
    }
  }
`