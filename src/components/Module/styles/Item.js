import Style from 'styled-components'

export const Wrapper = Style.div`
  border: 1px solid white;
  color: var(--dark-text-color);
  text-align: center;
  padding: 21px;
  background-color: var(--box-color);
  border-radius: 7px;
  font-size: 17px;
  font-weight: 500;
  text-align: left;

  animation: showUp ${props => 0.5 + props.animationDelay * 0.5}s;

  @keyframes showUp {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  span {
    visibility: hidden;
    display: none;
  }

  :hover {
    span {
      visibility: visible;
      display: inline;
    }

    span:hover {
      cursor: pointer;
    }
  }

  p {
    margin: 5px 0px 0px 0px;
  }

`

export const Info = Style.div`
  display: flex;
  align-items: center;

  img {
    margin: 0px 5px 0px 0px !important;
    width: 100px !important;
  }

  p {
    display: inline;
    margin: 0px !important;
  }
`

export const Top = Style.div`
  height: 40px;
  color: var(--dark-text-color);
`

export const Bottom = Style.div`
  display: grid;
  grid-template-rows: 30px;
  grid-template-columns: repeat(4, 1fr);
  align-items: end;
  height: 40px;
  
  p {
    display: inline-block;
    float: left;
    grid-column: span 3;
    font-size: 12px;
  }

  img {
    width: 12px !important;
    float: right;
    grid-column: -1;
    margin-bottom: 2px;
  }
`

export const ContextMenuBtn = Style.span`
  font-size: 20px;
  float: right;
  margin-top: -22px;
  margint-left: 40px;
`
export const AddToStarredBtn = Style.span`
  width: 12px;
  grid-column: -1;
  margin-bottom: 2px;
`

export const RemoveStarredBtn = Style.div`
  width: 12px;
  grid-column: -1;
  margin-bottom: 2px;

  :hover{
    cursor:pointer;
  }
`