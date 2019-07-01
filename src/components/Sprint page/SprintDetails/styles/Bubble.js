import Style from 'styled-components'

export const Wrapper = Style.div`
    background-color: var(--box-color);
    border-radius: 30px;
    padding: 10px 25px;
    display: inline-block;
    text-align: center;

    @media screen and (min-width: 1714px) {
        font-size: 1.6vw;
      }
`

export const Title = Style.span`
    font-size: 1.4vw;
    margin-right: 10px;
`

export const Number = Style.span`
    font-size: 1vw;
    font-weight: 500;
`

//1714