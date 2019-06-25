import Style from 'styled-components'

export const PrimaryBtn = Style.button`
  width: 110px;
  font-size: 24px;
  border: none;
  background-color: white;
  padding: 8px 10px 10px 10px;
  border-radius: 3px;
  color: #2D4D60;
  font-size: 17px;
  font-weight: 700;

  :focus {
    outline: none;
  }

  :hover {
    cursor: pointer;
  }

  :active {
    color: var(--box-color);
    background-color: var(--dark-text-color);
  }
`

export const SubTitleLikeBtn = Style.button`
  font-size: 15px;
  border: none;
  background-color: rgba(0,0,0,0);
  color: white;
  font-weight: 400;

  :hover {
    text-decoration: underline;
    cursor: pointer;
  }

  :focus {
    outline: none;
  }
`
