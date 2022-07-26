import {Wrapper, Title, SubTitle, ChooseOffer, OfferWrapper } from './product.styled';
import Checkbox from '../../components/forms/elements/Checkbox';
import OfferItem from './OfferItem';
function Offer(){
    return(
        <Wrapper>
            <Title>des services adaptés à vos projets</Title>
            <SubTitle>Tout ce dont vous avez besoin pour vous offrir un service de première catégorie</SubTitle>
            <ChooseOffer>Choisissez  parmis nos offres pour commencer</ChooseOffer>
                <Checkbox />
            <OfferWrapper>
                <OfferItem />
            </OfferWrapper>
        </Wrapper>

    )
}

export default Offer;