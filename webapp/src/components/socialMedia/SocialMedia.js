import { FaFacebookSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
import { Wrapper, List, Item, Link} from './socialMedia.styled';
function SocialMedia(){
    return (
        <Wrapper>
            <List>
                <Item><Link href="#"><FaFacebookSquare /></Link></Item>
                <Item><Link href="#"><FaTwitterSquare /></Link></Item>
                <Item><Link href="#"><FaLinkedin /></Link></Item>
                
            </List>
        </Wrapper>
    )
}

export default SocialMedia;