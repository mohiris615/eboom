import { 
    Jumbotron,
    Content,
    ContentTile,
    ContentButton,
    StrongText, 
    ContentSubTile,
    LeftContent,
    RightContent,
    Button,
    ButtonLink,
    RightContentImg

} from './home.styled.js';
import robot from '../../assets/images/robot.gif';

function Home (){
    return (
            <Jumbotron>
                <Content>
                    <LeftContent>
                        <ContentTile>
                            Analyser. Comprendre. Accélérer.
                        </ContentTile>
                        <ContentSubTile>
                            <StrongText>E-BOOM chatbot</StrongText> transforme le <StrongText>langage en données</StrongText> pour que vous puissiez prendre de meilleures décisions.
                        </ContentSubTile>
                        <ContentButton>
                            <Button>
                                <ButtonLink href="#offers">DéCOUVRIR NOS OFFRES</ButtonLink>
                            </Button>
                        </ContentButton>
                    </LeftContent>
                    <RightContent>
                        <RightContentImg src={robot} />
                    </RightContent>
                </Content>
            </Jumbotron>
    )
}


export default Home;