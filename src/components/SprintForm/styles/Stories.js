import Style from 'styled-components'

export const Wrapper = Style.div`
 display: grid;
 height: 100%;
 width: 85%;
 grid-template-rows: 0.2fr 280px; 0.6fr;
 

 p {
   margin: 0;
   font-size: 23px;
   font-weight: 500;
   margin-top: 50px;
 }

 button {
  align-self: start;
  justify-self: center;
  font-size: 18px;
  background: rgba(0,0,0,0);
  border: 1.5px solid white;
  color: white;
  padding: 7px 29px;
  margin-top: 95px;

  :hover {
    cursor: pointer;
  }
 }
`

export const Stories = Style.div`
  display: grid;
  align-content: start;	
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 40px;
  grid-row-gap: 20px;
  overflow: scroll;
  margin-top: 20px
  margin-top: 35px;
  height: 320px;
`