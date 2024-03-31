import styled from 'styled-components';
import Flickity from 'react-flickity-component';
import '../../components/flickity.css';
import { StudentCard, Discription } from '../../components';
import { getStudents } from '../../localstorage';
import star from '../../../public/star.png';
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

const Slyder = styled.div`
	margin: 10px;
	height: 500px;
`;

const flickityOptions = {
	initialIndex: 2,
};

const Star = styled.img`
	height: 50px;
	width: 50px;
`;

const students = getStudents('students');

const MainContainer = ({ className }) => {
	return (
		<div className={className}>
			<H2> Hackathon#2 </H2>
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
									<StudentCard index={index + 1}>
										{student.is_favorite ? (
											<Star src={star} alt="*" />
										) : (
											''
										)}
									</StudentCard>
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
