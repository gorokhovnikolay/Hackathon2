import styled from 'styled-components';

// const StudentCardContainer = ({ className, index, boxShadow, ...props }) => {
// 	console.log(props);
// 	return <div className={className} {...props}></div>;
// };

const StudentCardContainer = ({ className, student }) => {
	return (
		<div className={className}>
			{student.is_favorite ? (
				<img className="card-star" src="/star.png" alt="*" />
			) : (
				''
			)}
			<img className="card-avatar" src={student.image_url} alt={student.id} />
		</div>
	);
};

export const StudentCard = styled(StudentCardContainer)`
	margin: 20px;
	height: 517px;
	width: 388px;
	background-image: url(${({ index }) => index}.jpg);
	box-shadow: ${({ boxShadow = 'none' }) => boxShadow};
	background-repeat: no-repeat;
	background-size: 100% 100%;
	border-radius: 20px;

	&:hover {
		cursor: pointer;
	}
	& .card-avatar {
		object-fit: cover;
		width: 100%;
		height: 100%;
	}

	& .card-star {
		position: absolute;
		height: 69px;
	}
`;
