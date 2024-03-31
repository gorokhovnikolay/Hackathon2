import styled from 'styled-components';
import { StudentCard } from '../../components';
import { getStudents } from '../../localstorage';
import { Link } from 'react-router-dom';

const PlateH2 = styled.h2`
	color: black;
	margin: 16px;
	text-align: center;
`;

const H2 = styled.h2`
	margin: 0;
	text-align: center;
	font-size: 40px;
`;

const FavouritesStudents = styled.div`
	flex-wrap: wrap;
	display: flex;
	margin: 10px;
	min-height: 500px;
`;

const FavouritesContainer = ({ className }) => {
	const students = getStudents('students').filter(
		(student) => student.is_favorite === true,
	);
	return (
		<div className={className}>
			<H2> Hackathon#2 </H2>
			<FavouritesStudents>
				{students.map((student, index) => {
					return (
						<div key={student.id} className="Plate">
							<Link to={`/student/${student.id}`}>
								{/* {student.is_favorite ? (
									<StudentCard
										index={index + 1}
										boxShadow="0 0 20px #ffd700"
									>
										<PlateH2>{student.name}</PlateH2>
									</StudentCard>
								) : (
									''
								)} */}
								<Link to={`/student/${student.id}`}>
									{/* <StudentCard index={index + 1}>
										{student.is_favorite ? (
											<Star src="/star.png" alt="*" />
										) : (
											''
										)}
									</StudentCard> */}
									<StudentCard student={student} />
								</Link>
								<PlateH2>{student.name}</PlateH2>
							</Link>
						</div>
					);
				})}
			</FavouritesStudents>
		</div>
	);
};

export const Favourites = styled(FavouritesContainer)``;
