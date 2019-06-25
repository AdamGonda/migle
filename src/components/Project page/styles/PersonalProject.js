import Style from 'styled-components'

export const Wrapper = Style.div`
padding: 15px 60px;
display: grid;
grid-template: "sprints sprints sprints controll controll"
`

export const Sprints = Style.div`
grid-column: sprints;
`