import Style from 'styled-components'

export const Header = Style.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 20px;
`

export const Body = Style.div`
    margin-top: 20px;
`