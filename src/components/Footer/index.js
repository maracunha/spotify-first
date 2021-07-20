import StyledFooter from './styles'
import { AiFillGithub } from 'react-icons/ai'

function Footer() {
    return (
        <StyledFooter>
            <a href="https://github.com/maracunha/sporfy-first" target="_blank" rel="noreferrer">
                <AiFillGithub />
                visit my repository
            </a>
        </StyledFooter>
    )
}

export default Footer;
