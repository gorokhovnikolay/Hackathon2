import styled from 'styled-components';

const StudentCardContainer = ({ className, index, boxShadow, ...props }) => {
	return <div className={className} {...props}></div>;
};

export const StudentCard = styled(StudentCardContainer)`
	margin: 20px;
	height: 517px;
	width: 388px;
	background-image: url(${({ index }) => index}.jpg);
	box-shadow:${({boxShadow='none'})=>boxShadow};
	background-repeat: no-repeat;
	background-size: 100% 100%;
	border-radius: 20px;

	&:hover {
		cursor: pointer;
	}
`;
