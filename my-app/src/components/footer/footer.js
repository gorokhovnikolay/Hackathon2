import styled from 'styled-components';

const FooterContainer = ({ className }) => {
	const year = new Date().getFullYear();

	return <div className={className}>{year}</div>;
};

export const Footer = styled(FooterContainer)`
	height: 100px;
	background: #474747;
	border-top: 1px solid gray;
	width: 100%;
	margin: auto auto 0;
	display: flex;
	justify-content: center;
	align-items: center;
	color: white;
	font-size: 17px;
	font-weight: 500;
`;
