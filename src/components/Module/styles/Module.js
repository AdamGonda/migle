import Style from 'styled-components'

export const Wrapper = Style.div`
  margin-bottom: 52px;
`

export const Title = Style.div`
  margin: 20px 0px 20px 0px;

  img {
    width: 17px;
    margin-right: 15px;
  }

  p {
    font-size: 24px;
    color: white;
    display: inline-block;
    font-weight: 600;
    margin: 0px;
  }
`

export const Body = Style.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(195px, 195px));
  grid-template-rows: 120px;
  align-items: stretch;
  grid-gap: 22.4px;

  img {
    margin-left: 20px;
    width: 40px;
  }
`