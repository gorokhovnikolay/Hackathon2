import PropTypes from 'prop-types';
import { StyledProgressBar } from './StyledProgressBar';
const ProgressBar = ({
	type = '',
	procent = '50%',
	color = 'black',
	width = '100px',
	height = '100px',
	degree = '90',
	borderWidth = '2px',
	borderColor = 'black',
}) => {
	ProgressBar.propTypes = {
		procent: PropTypes.string,
		color: PropTypes.string,
		width: PropTypes.string,
		type: PropTypes.string,
		height: PropTypes.string,
		degree: PropTypes.string,
		borderWidth: PropTypes.string,
		borderColor: PropTypes.string,
	};
	return (
		<StyledProgressBar
			type={type}
			height={height}
			width={width}
			color={color}
			degree={degree}
			procent={procent}
			borderWidth={borderWidth}
			borderColor={borderColor}
		>
			{procent}
		</StyledProgressBar>
	);
};

export default ProgressBar;
