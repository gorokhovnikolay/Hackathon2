import styled from 'styled-components';

const HeaderContainer = ({ className }) => {
	return <div className={className}></div>;
};

export const Header = styled(HeaderContainer)`
	height: 50px;
	background: red;
`;
