import Style from 'styled-components'

export const Wrapper = Style.div`
  display: flex;
  align-items: center;
  margin-right: -100px;

  img {
    width: 44px;
    border-radius: 30px;
    margin-right: 10px;
  }

  div, span {
    font-size: 18px;
    font-weight: 400;
    margin: 0px 6px;
    color: white;
    text-decoration: none;

  }

  div:hover, img:hover {
    cursor: pointer;
  }

  span {
    font-size: 25px;
    margin-top: -6px;
}
`