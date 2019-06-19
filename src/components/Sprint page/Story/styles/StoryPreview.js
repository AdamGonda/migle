import Style from 'styled-components'

export const Wrapper = Style.div`
display: flex;
align-items: center;
justify-content:space-between; 
background-color: #DFE1E6;
border-radius: 25px;
color: var(--dark-text-color);
padding: 10px 40px 10px 30px;
height: 70px;
font-size: 12px;
font-weight: 500;
`

export const JustId = Style.div`
display: flex;
align-items: center;
justify-content: center;
width: 49px;
height: 49px;
border: 1.5px solid #2D4D60;
border-radius: 30px;
font-weight: 500;
font-size: 24px;
margin: 0;
`

export const Description = Style.div`
word-wrap: break-word
width: 320px;
`

export const BusinessValue = Style.div`
display: flex;
align-items: center;
justify-content: center;
border: 1.5px solid #2D4D60;
border-radius: 25px;
padding: 10px 18px;
font-size: 24px;

img {
  width: 20px;
  margin-right: 10px;
}
`
