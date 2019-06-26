import Style from 'styled-components'

export const Wrapper = Style.div`
  display: grid;
  grid-template-rows: 1fr 0.5fr;
  width: 100%;
  height: 100%;
`

export const Top = Style.div`
  display: grid;
  grid-template-columns: repeat(3,1fr);
  height: 100%;
  
  h1 {
    grid-column: 2;
    place-self: center;
    font-weight: 500;
    font-size: 40px;
    margin: 0px;
  }

  button {
    align-self: center;
    justify-self: end;
    margin-right: 50px;

    font-weight: 600;
    font-size: 18px;
    width: 34px;
    height: 34px;
    border: 2px solid white;
    color: white;
    background: rgba(0,0,0,0);
    text-align: center;
    grid-column: 3;
  
    :hover {
      cursor: pointer;
    }
  }
`

export const Bottom = Style.div`
  display: grid;
  grid-template-columns: repeat(3,1fr);
  grid-template-rows: 0.3fr 0.3fr;
`

export const StoryDescription = Style.textarea`
  //width: 497px;
  grid-column: 2;
  height: 55px;
  align-self: start;
  resize: none;
  border: none;
  padding: 10px 15px;
  font-size: 15px;
`

export const BusinessValue = Style.div`
  display: flex;
  align-items: center;
  align-self: start;
  grid-row: 2;
  grid-column: 2;
  justify-self: start;
  align-self: end;
  background: white;
  padding: 6.2px 10px;
  width: 70px;

  img {
    width: 15px;
    margin-right: 10px;
  }

  select {
    border: none;
    width: 75px;
    height: 25px;
  }
`
