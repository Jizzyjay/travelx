import React from 'react'
import styled from 'styled-components'
import { BiWorld } from 'react-icons/bi'
import { MdAirplanemodeActive, MdTimer } from 'react-icons/md'
import { FaMoneyCheck } from 'react-icons/fa'

const StatData = [
    {
        icons: (<BiWorld 
            css={`
            color: #047bf1;`} 
            /> ),
        title: "Over 120 Destinations",
        desc: "Travel to over 120 unique destinations",
    },
    {
        icons: (<MdAirplanemodeActive 
            css={`
            color: #f3a82e;`}
            /> ),
        title: "1 million Trips Made",
        desc: "Over 1 million trips completed last year",
    },
    {
        icons: (<MdTimer 
            css={`
            color: #f34f2e;`}
        /> ),
        title: "Fastest Customer Support",
        desc: "Access our Customer Support 24/7",
    },
    {
        icons: (<FaMoneyCheck 
            css={`
            color: #3af576;`}/> ),
        title: "Best Deals",
        desc: "We offer the best prices",
    },
]

const Stat = () => {
    return (
        <StatContainer>
            <Heading>Why You Should Choose Us</Heading>
            <Wrapper>
                {StatData.map((item, index ) => {
                return (
                    <StatBox key={index}>
                        <Icon>{item.icon}</Icon>
                        <Title>{item.title}</Title>
                        <Description>{item.desc}</Description>
                    </StatBox>
                )
                })}
            </Wrapper>
        </StatContainer>
    )
}

export default Stat

const StatContainer = styled.div`
    width: 100%;
    background: #fff;
    color: #000;
    display: flex:
    flex-direction: column;
    justify-content: center;
    padding: 4rem calc((100vw - 1300px) / 2);
`

const Heading = styled.div` 
    text-align: start;
    font-size: clamp (1.5rem, 5vw, 2rem)
    margin-bottom: 3rem;
    padding: 0 2rem;
`
const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }


    @media screen and (max-width: 500px) {
        grid-template-columns: 1fr;
    }
`

const StatBox = styled.div`
    height: 100%;
    width: 100%;
    padding: 2rem;
`

const Icon = styled.div`
    font-size: 3rem;
    margin-bottom: 1rem;
`

const Title = styled.p`
    font-size: clamp(1rem, 2.5vw, 1.5rem);
    margin-bottom: .5rem;
`

const Description = styled.p`
    font-size: 1.5rem:
`