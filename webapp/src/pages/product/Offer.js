import {Wrapper, Title, SubTitle, ChooseOffer, OfferSwitcherButton, OfferSwitcherWrapper, OfferSwitcherOption } from './product.styled';

function Offer(){
    return(
        <Wrapper>
            <Title>des services adaptés à vos projets</Title>
            <SubTitle>Tout ce dont vous avez besoin pour vous offrir un service de première catégorie</SubTitle>
            <ChooseOffer>Choisissez  parmis nos offres pour commencer</ChooseOffer>
            <OfferSwitcherWrapper>
            <OfferSwitcherOption></OfferSwitcherOption>
            <OfferSwitcherButton></OfferSwitcherButton>
            </OfferSwitcherWrapper>          
        </Wrapper>
    )
}

export default Offer;