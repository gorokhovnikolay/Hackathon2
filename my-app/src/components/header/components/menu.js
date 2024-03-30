import { useMatch } from 'react-router-dom';
import { Item } from './item';
import styled from 'styled-components';

const MenuContainer = ({ className }) => {
	const activeItemMain = useMatch('/');
	const activeItemfavorits = useMatch('/favorits');

	return (
		<ul className={className}>
			<Item link="/" active={activeItemMain}>
				Главная
			</Item>
			<Item link="/favorits" active={activeItemfavorits}>
				Избранные
			</Item>
		</ul>
	);
};

export const Menu = styled(MenuContainer)`
	display: flex;
	justify-content: flex-start;
	margin: 0;
`;
