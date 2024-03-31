import styled from 'styled-components';
import { StudentCard, H2 } from '../../components';
import { getStudents } from '../../localstorage';
import { Link } from 'react-router-dom';

const PlateH2 = styled.h2`
	color: black;
	margin: 16px;
	text-align: center;
`;

const FavouritesStudents = styled.div`
	flex-wrap: wrap;
	display: flex;
	margin: 10px;
	min-height: 500px;
`;

const students = getStudents('students');

const FavouritesContainer = ({ className }) => {
	return (
		<div className={className}>
			<H2> 🜲 Избранные 🜲 </H2>
			<FavouritesStudents>
				{students.map((student, index) => {
					return (
						<div key={student.id} className="Plate">
							<Link to={`/student/${student.id}`}>
								{student.is_favorite ? (
									<StudentCard
										index={index + 1}
										boxShadow="0 0 20px #ffd700"
									>
										<PlateH2>{student.name}</PlateH2>
									</StudentCard>
								) : (
									''
								)}
							</Link>
						</div>
					);
				})}
			</FavouritesStudents>
		</div>
	);
};

export const Favourites = styled(FavouritesContainer)``;
