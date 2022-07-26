import styled from 'styled-components';

export const OfferWrapper = styled.div`
    padding: 40px;
    background-color: #fff;
    border-radius: 20px;
`
export const Wrapper = styled.section`
    width: 80%;
    margin: auto;
    text-align: center;
`
export const Title = styled.h1`
    text-transform: uppercase;
    color: #DD6058;
    font-weight: 700;
`
export const SubTitle = styled.h3`
    color: #4D4A4F;
  
`
export const ChooseOffer = styled.h4`
    color: #00B0D7;
`
export const OfferSwitcherOption = styled.input.attrs({ type: 'checkbox' })`
    opacity: 0;
    width: 0;
    height: 0;
`

export const OfferSwitcherButton = styled.span`
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
    background-color: #2196F3;
    border-radius: 50px;
    &:before {
        position: absolute;
        content: "";
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        -webkit-transition: .4s;
        transition: .4s;
        border-radius: 50%;
        border-radius: 34px;
    }
    `

export const OfferSwitcherWrapper = styled.label`
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;

    & ${{OfferSwitcherOption}}:focus & ${{OfferSwitcherButton}}{
        box-shadow: 0 0 1px #2196F3;
    };

    & ${{OfferSwitcherOption}}:checked & ${{OfferSwitcherButton}}{
        background-color: #2196F3;
    };

    & ${{OfferSwitcherOption}}:checked & ${{OfferSwitcherButton}}:before {
        -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        transform: translateX(26px);
    };
`

