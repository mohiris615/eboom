import styled from 'styled-components';
import bg from '../../assets/images/bg.jpg';

export const ContainerFluid = styled.div`
    width: 100%;
    margin: auto;
`
export const Jumbotron = styled.div`
    height: 100vh;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6)), url(${bg});
    background-attachment: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
    margin-top:0;
    position: relative;
`

export const Content = styled.section`
    width: 80%;
    color: #fff;
    display: flex;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%) !important;
    @media (max-width: 768px) {
        top: 50%;
    }
`

export const LeftContent = styled.article``

export const RightContent = styled.article`

    `
export const RightContentImg = styled.img`
    width: 100%;
    height: 100%;

    @media (max-width: 768px) {
        display: none;
    }
`

export const ContentTile = styled.h1`
    color: #DD6058;
    font-size: 3rem;

    @media (max-width: 768px) {
        font-size: 2rem;
    }
`

export const ContentSubTile = styled.h1`

`
export const ContentButton = styled.div`
    color: #fff;
    padding-top: 40px;
 `

 export const Button = styled.button`
    border-color: #fff;
    border-radius: 40px;
    border: none;
    position: relative;
    overflow: hidden;
    z-index: 1;
    transition: color 150ms ease-in-out;
    
    &:after {
      content: '';
      position: absolute;
      display: block;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 0;
      height: 100%;
      background:  #DD6058;
      z-index: -1;
      transition: width 150ms ease-in-out;
    }
    
    &:hover {
        color: #fff;
      &:after {
        width: 110%;
      }
    }
   
 `

 export const ButtonLink = styled.a`
    display: inline-block;
    color: #DD6058;
    padding: 15px 30px;
    text-transform: uppercase;
    text-align: center;
    text-decoration: none;

    @media (max-width: 768px) {
        padding: 7.5px 15px;
    }

    &:hover {
        color: #fff;
    }
 `

 export const StrongText = styled.span`
    color: #00B0D7;
 `