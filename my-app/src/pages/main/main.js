import styled from 'styled-components';
import Flickity from 'react-flickity-component';
import '../../components/flickity.css';
import KMI from '../../components/images/KMI.PNG';
import WOLF from '../../components/images/wolf.jpg';
import { StudentCard } from '../../components';

const students = {
	id: [1, 2, 3, 4],
	name: ['Николай', 'Максим', 'Алексей', 'Николай'],
};
const Discription = styled.div`
	background-color: rgba(217, 217, 217, 0.3);
	margin: 10px;
	height: 200px;
	text-align: center;
	font-family: Benzin;
	color: #9adceb;
	text-shadow:
		-0 -1px 2px #6137bb,
		0 -1px 2px #6137bb,
		-0 1px 2px #6137bb,
		0 1px 2px #6137bb,
		-1px -0 2px #6137bb,
		1px -0 2px #6137bb,
		-1px 0 2px #6137bb,
		1px 0 2px #6137bb,
		-1px -1px 2px #6137bb,
		1px -1px 2px #6137bb,
		-1px 1px 2px #6137bb,
		1px 1px 2px #6137bb,
		-1px -1px 2px #6137bb,
		1px -1px 2px #6137bb,
		-1px 1px 2px #6137bb,
		1px 1px 2px #6137bb;
	font-size: 22px;
	border-radius: 50px;
	padding: 25px;
`;

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
	margin: 50px;
	height: 500px;
`;

const flickityOptions = {
	initialIndex: 2,
};

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
					{students['id'].map((index) => {
						return (
							<div key={index} className="Plate">
								<StudentCard index={index} />

								<PlateH2>{students['name'][index - 1]}</PlateH2>
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
