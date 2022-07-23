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

export const Content = styled.div`
    width: 60%;
    color: #fff;
    display: flex;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) !important;
`

export const LeftContent = styled.div``

export const RightContent = styled.div`
    `
export const RightContentImg = styled.img`
    width: 100%;
    height: 100%;
`

export const ContentTile = styled.h1`
    color: #DD6058;
`

export const ContentSubTile = styled.h2`
    
`
export const ContentButton = styled.div`
    color: #fff;
    padding-top: 40px;
 `

 export const Button = styled.button`
    border: none;
    background: #DD6058;
    border-radius: 25px;
    padding:0;
    margin: 0;

   
 `

 export const ButtonLink = styled.a`
    display: inline-block;
    color: #fff;
    padding: 20px 30px;
    text-transform: uppercase;
    text-align: center;
    text-decoration: none;
 `

 export const StrongText = styled.span`
    color: #00B0D7;
 `