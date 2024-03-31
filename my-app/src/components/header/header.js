import styled from 'styled-components';
import PropTypes from 'prop-types';
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
	margin-bottom: 15px;
	& .header-menu {
		width: 1000px;
		margin: 0 auto;
	}
`;

HeaderContainer.propTypes = {
	className: PropTypes.string,
};
