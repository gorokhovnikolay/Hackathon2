import styled from 'styled-components';

const FooterContainer = ({ className }) => {
	return <div className={className}></div>;
};

export const Footer = styled(FooterContainer)`
	height: 100px;
	background: #474747;
	border-top: 1px solid gray;
	width: 100%;
	margin: auto auto 0;
`;
