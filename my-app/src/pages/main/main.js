import styled from 'styled-components';
import Flickity from 'react-flickity-component';
import '../../components/flickity.css';
import { StudentCard, Discription, H2 } from '../../components';
import { getStudents } from '../../localstorage';
import { Link } from 'react-router-dom';
import { useLayoutEffect, useState } from 'react';

const PlateH2 = styled.h2`
	color: black;
	margin: 16px;
	text-align: center;
	text-shadow: 0 0 7px #c1c1d9;
	text-decoration: underline;
`;

const Slyder = styled.div`
	margin: 10px;
	min-height: 500px;
	font-family: Benzin;
`;

const flickityOptions = {
	initialIndex: 2,
};

const MainContainer = ({ className }) => {
	const [students, setStudents] = useState([]);

	useLayoutEffect(() => {
		setStudents(getStudents('students'));
	}, []);

	return (
		<div className={className}>
			<H2> HACKATHON#2 </H2>
			<Discription>
				Наша команда - это креативные профессионалы ,<br />
				способные создавать веб-проекты высокого уровня.
				<br />
				Доверьте нам ваш сайт, и мы превратим вашу идею
				<br />в реальность с вдохновляющим дизайном и передовыми технологиями.
			</Discription>
			<Slyder>
				<Flickity
					className="Slider"
					elementType="div"
					disableImagesLoaded={false}
					options={flickityOptions}
					reloadOnUpdate
					static
				>
					{students.map((student, index) => {
						return (
							<div key={student.id} className="Plate">
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
							</div>
						);
					})}
				</Flickity>
			</Slyder>
		</div>
	);
};

export const Main = styled(MainContainer)`
	/* display: flex;
	flex-direction: column;
	align-items: center; */
`;
