import { Link } from 'react-router-dom';
import styled from 'styled-components';


const StyledLink = styled(Link)`
    text-decoration: none;
    color: var(--font-black); 
    &:hover {
        text-decoration: none;
        color: var(--font-white);
    }
`;

export default StyledLink