import Style from 'styled-components'

export const Wrapper = Style.div`
    display: grid;
    grid-template-columns: 50px 1fr 1fr 1fr 1fr;
    column-gap: 20px;
    align-items: center; 
    background-color: var(--box-color);
    height: 76px;
    border-radius: 25px;
    margin: 9.7px 0px;
    padding: 5px 30px;
`

export const Description = Style.div`
    font-size: 15px;
    font-weight: 500;
    word-wrap: break-word;
    width: 250px;
    margin-left: 20px;

    p {
        margin: 0px;
    }
`

export const PickUpStory = Style.div`
    display: flex;
    justify-content: center;
    align-content: center;
    width: 49px;
    height: 49px;
    border: 1.5px solid var(--dark-text-color);
    border-radius: 30px;

    img {
        margin-right: -3px;
        width: 18px;
    }
`

export const Bubble = Style.div`
    justify-self: center;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1.5px solid #2D4D60;
    border-radius: 25px;
    padding: 10px 10px;
    font-size: 24px;

    img {
    width: 20px;
    margin-right: 10px;
    }
`

export const BusinessValue = Style(Bubble)`
    width: 110px;
`

export const Estimation = Style(Bubble)`
    width: 70px;
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
    justify-self: end;

    p {
        font-size: 22px;
        margin: 0px;
        margin-bottom: 5px;
    }

    img {
        width: 117px;   
    }
`
