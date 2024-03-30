import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ItemContainer = ({ className, children, link }) => {
	return (
		<li className={className}>
			<Link to={link}>{children}</Link>
		</li>
	);
};

export const Item = styled(ItemContainer)`
	list-style: none;
	font-size: 20px;
	padding: 11px 12px;
	border: 1px solid white;
	background-color: ${({ active }) => (active ? '#fff' : '#474747')};

	& .list-item:first-child {
		border-right: 4px solid white;
	}
	a {
		text-decoration: none;
		color: ${({ active }) => (active ? '#000' : '#fff')};
		font-weight: 600;
	}
`;
