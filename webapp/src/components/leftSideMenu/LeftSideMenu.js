import {AsideWrapper} from "./styles.styled";

function LeftSideMenu(){
    return (
        <AsideWrapper>
            <ul>
                <li>Questions</li>
                <li>Tags</li>
                <li>Raking</li>
            </ul>
            <ul>
                <li>Your questions</li>
                <li>Your answer</li>
                <li>Your likes and votes</li>
            </ul>
            <div>
                <ul>
                    <li>Twitter</li>
                    <li>Facebook</li>
                    <li>Linkedin</li>
                </ul>
            </div>
        </AsideWrapper>
    )
}

export default LeftSideMenu;