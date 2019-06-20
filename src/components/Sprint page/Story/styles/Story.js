import Style from 'styled-components'

export const Wrapper = Style.div`
    display: grid;
    grid-template-columns: 50px fit-content(800px) repeat(2, 1fr);
    column-gap: 40px;
    align-items: center; 
    background-color: #DFE1E6;
    height: 76px;
    border-radius: 25px;
    margin: 9.7px 0px;
    padding: 0px 30px;
`

export const PickUpStory = Style.div`
    display: flex;
    justify-content: center;
    align-content: center;
    width: 49px;
    height: 49px;
    border: 1.5px solid #2D4D60;
    border-radius: 30px;

    img {
        margin-right: -3px;
        width: 18px;
    }
`

export const Estimation = Style.div`
   font-size: 23px;
   font-weight: 500;
`

export const Responsible = Style.div`
    text-align: center;

    img {
        border-radius: 20px;
        widht: 34px;
        height: 34px;
        margin-bottom: -3px;
    }

    p {
        margin: 0px;
        font-weight: 600;
        font-size: 13px;
    }
`

export const Status = Style.div`
    text-align: center;

    p {
        font-size: 22px;
        margin: 0px;
        margin-bottom: 5px;
    }

    img {
        width: 117px;   
    }
`
