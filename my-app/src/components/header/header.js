import styled from 'styled-components';
import { Menu } from './components/menu';

const HeaderContainer = ({ className }) => {
	return (
		<div className={className}>
			<div className="header-menu">
				<Menu />
			</div>
		</div>
	);
};

export const Header = styled(HeaderContainer)`
	height: 50px;
	background: #474747;
	& .header-menu {
		width: 1000px;
		margin: 0 auto;
	}
`;
