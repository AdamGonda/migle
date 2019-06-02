import React from 'react'
import Style from 'styled-components'

export default ({id, dependencies}) => {

    const showFirstNDependenciesWith = (n, fn) => {
        if(dependencies.length >= n + 1){
            return (
                <div>
                    {dependencies.slice(0, n).map(fn)}
                    ...
                </div>
            )
        }else{
            return (
                <div>
                    {dependencies.map(fn)}
                </div>
            )
        }
    }

    return (
        <>
            {!dependencies ?
                <JustId>
                    <p>{id}</p>
                </JustId> :
                <IdAndDependencies>
                    {showFirstNDependenciesWith(3, (item, idx) => <span key={idx} >{idx === 0 ? item : `, ${item}`}</span>)}
                    <p>{id}</p>
                </IdAndDependencies>
            }
        </>
    )
}

const JustId = Style.div`
    display: flex;
    align-items: center;
    width: 49px;
    height: 49px;
    border: 1.5px solid #2D4D60;
    border-radius: 30px;
    
    
    p {
        font-weight: 500;
        font-size: 24px;
        margin: 0px auto;
    }
`

const IdAndDependencies = Style.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 49px;
    height: 49px;
    border: 1.5px solid #2D4D60;
    border-radius: 30px;
    
    div {
        margin: 0px auto;
        font-size: 10px;
        font-weight: 600;
        
    }
    
    p {
        font-weight: 600;
        font-size: 17px;
        margin: 0px auto;
        margin-bottom: -2px;
    }

    img {
        height: 6px;
        
    }
`