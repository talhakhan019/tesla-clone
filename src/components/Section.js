import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';
function Section({title,Description,img, leftBtn,rightBtn}) {
  return (
    <Wrap bgImage = {img}>
        <Fade bottom>
            <ItemText>
                <h1>{title}</h1>
                <p>{Description}</p>
            </ItemText>
        </Fade>
        <Buttons>
            <Fade bottom>
                <ButtonGroup>
                    <LeftButton>
                        {leftBtn}
                    </LeftButton>
                    {
                        rightBtn && 
                        <RightButton>
                            {rightBtn}
                        </RightButton>
                    }
                    
                </ButtonGroup>
            </Fade>
            <DownArrow src = "./images/down-arrow.svg"/>
        </Buttons>
    </Wrap>
  )
}

export default Section
const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-image: ${props => `url("./images/${props.bgImage}")`};
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`
const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
    /* z-index: 10; */
`
const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;
    @media (max-width: 760px){
        flex-direction: column;
    }
`
const LeftButton = styled.div`
        background-color: rgba(23,26,32,0.8);
        height: 40px;
        width: 256px;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 100px;
        opacity: 0.85;
        text-transform: uppercase;
        font-size: 12px;
        cursor: pointer;
        margin: 8px
`
const RightButton = styled(LeftButton)`
    background-color: #fff;
    opacity: 0.65;
    color: #000;
`
const DownArrow = styled.img`
    height: 40px;
    overflow-x: hidden;
    animation: animationDown infinite 1.5s;
`
const Buttons = styled.div`

`