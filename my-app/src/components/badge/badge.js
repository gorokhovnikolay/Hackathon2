import styled from 'styled-components';

const BadgeContainer = ({ className, children }) => {
	return <span className={className}>{children}</span>;
};

export const Badge = styled(BadgeContainer)`
	background-color: ${({ background }) => background};
	padding: 4px 10px;
	color: ${({ color }) => color};
	font-size: 18px;
	font-weight: 500;
	border-radius: 9px;
`;
