import Style from 'styled-components'

export const Wrapper = Style.div`
display: grid;
grid-template-columns: 50px fit-content(800px) 1fr;
column-gap: 40px;
align-items: center; 
justify-items: stretch;
background-color: var(--box-color);
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
border: 1.5px solid var(--dark-text-color);
border-radius: 30px;
font-weight: 500;
font-size: 24px;
margin: 0;
`

export const Description = Style.div`
  min-width: 282px;
`

export const BusinessValue = Style.div`
display: flex;
align-items: center;
justify-content: center;
border: 1.5px solid var(--dark-text-color);
border-radius: 25px;
padding: 10px 18px;
font-size: 24px;

img {
  width: 20px;
  margin-right: 10px;
}
`
