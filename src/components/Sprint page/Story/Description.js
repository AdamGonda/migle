import React from 'react'
import Style from 'styled-components'

export default ({ description }) => {
  const charLimit = 110

  return (
    <Wrapper>
      {description.length > charLimit ? (
        <>
          <p>
            {description.substring(0, charLimit)}
            <span>...</span>
          </p>
        </>
      ) : (
        <p>{description}</p>
      )}
    </Wrapper>
  )
}

const Wrapper = Style.div`
    font-size: 15px;
    font-weight: 500;
    display: flex;
    align-items: center;
    
  
    
    span {
        font-size: 22px;
        margin-top: -10px;
        display: inline-block;  
    }

    p {
      margin: 0px;
    }
`
