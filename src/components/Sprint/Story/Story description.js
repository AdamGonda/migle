import React from 'react'
import Style from 'styled-components'

export default ({ story }) => {
  const charLimit = 75
  const btnText = 'more'

  return (
    <Wrapper>
      {story.length > charLimit ? (
        <>
          <p>
            {story.substring(0, charLimit)}
            <span>...</span>
          </p>
          <button>{btnText}</button>
        </>
      ) : (
        <p>{story}</p>
      )}
    </Wrapper>
  )
}

const Wrapper = Style.div`
    width: 242px;
    font-size: 12px;
    text-align: center;
    display: flex;
    align-items: center;

    :hover {
        button {
            background-color: rgba(0,0,0,0);
            border: none;
            border-radius: 15px;
            border: 1px solid #2D4D60;
            font-weight: 500;
            display:inline-block;
            height: 25px;
            margin-left: 10px;
        }

        span {
            display: none;
        }
    }

    button {
        display: none;
    }
    

    button:focus {
        outline: none;
    }

    button:active {
        background-color: #2D4D60;
        color: white;
    }   
    
    span {
        font-size: 22px;
        font-weight: 500;
        margin-top: -10px;
        display: inline-block;  
    }
`
