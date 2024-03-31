import PropTypes from 'prop-types';
import { StyledButton } from './StyledButton';
const Button = (props) => {
	const {
		children,
		width = '100px',
		height = '30px',
		borderRadius = '10px',
		borderWidth = '1px',
		borderType = 'solid',
		borderColor = 'grey',
		fontSize = '16px',
		backgroundColor = 'white',
		color = 'black',
		onClick,
		disabled,
		type,
	} = props;
	Button.propTypes = {
		width: PropTypes.string,
		height: PropTypes.string,
		borderRadius: PropTypes.string,
		borderWidth: PropTypes.string,
		borderType: PropTypes.string,
		borderColor: PropTypes.string,
		fontSize: PropTypes.string,
		backgroundColor: PropTypes.string,
		color: PropTypes.string,
		children: PropTypes.string,
		onClick: PropTypes.func,
		disabled: PropTypes.bool,
		type: PropTypes.string,
	};
	return (
		<StyledButton
			width={width}
			height={height}
			color={color}
			backgroundColor={backgroundColor}
			fontSize={fontSize}
			borderColor={borderColor}
			borderType={borderType}
			borderRadius={borderRadius}
			borderWidth={borderWidth}
			type={type}
			disabled={disabled}
			onClick={onClick}
		>
			{children}
		</StyledButton>
	);
};

export default Button;
