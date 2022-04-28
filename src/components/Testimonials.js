import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'
import { FaRegLightbulb } from 'react-icons/fa'

const Testimonials = () => {
    return (
        <TestimonialsContainer>
            <TopLine>
                Testimonials
            </TopLine>
            <Description>
                What People are Saying
            </Description>
            <ContentWrapper>
                <ColumnOne>
                    <Testimonial>
                        <IoMdCheckmarkCircleOutline />
                        <h3>John Doe</h3>
                        <p>One of the best travel experience of my life</p>
                    </Testimonial>
                    <Testimonial>
                        <IoMdCheckmarkCircleOutline />
                        <h3>Jim Mike</h3>
                        <p>It was so fun exploring the mountains</p>
                    </Testimonial>
                    <Testimonial>
                        <FaRegLightbulb />
                        <h3>John Doe</h3>
                        <p>TravelX made my vacation super fun and easy with my trip and accomodation</p>
                    </Testimonial>
                </ColumnOne>
                <ColumnTwo>
                    image
                </ColumnTwo>
            </ContentWrapper>
        </TestimonialsContainer>
    )
}

export default Testimonials

const TestimonialsContainer = styled.div`
    width: 100%
    background: #fcfcfc;
    color: #000;
    padding: 5rem calc ((100vh - 1300px) / 2);
    height: 100%;

`
const TopLine = styled.div``
const Description = styled.div``
const ContentWrapper = styled.div``
const ColumnOne = styled.div``
const Testimonial = styled.div``
const ColumnTwo = styled.div``
