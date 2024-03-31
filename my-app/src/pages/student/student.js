import { useState } from 'react';
import styled from 'styled-components';
import starFull from '../../img/star-full.png';
import starEmpty from '../../img/star-empty.png';
import { useParams } from 'react-router';
import { BreadCrumbs } from '../../components';
import { getStudents, setStudents } from '../../localstorage';

const Badge = ({ color, content }) => (
	<div>
		{content} - {color}
	</div>
);

const Progress = ({ value, name_technologie, color, type }) => (
	<div>
		{name_technologie} - {value} - {color} - {type}
	</div>
);

const Button = ({ color, onClick, name, type }) => (
	<button onClick={onClick}>{name}</button>
);
const students = JSON.parse(localStorage.getItem('students'));

const StudentContainer = ({ className }) => {
	const { id } = useParams();
	const [student, setStudent] = useState(students.find((person) => person.id === id));

	const onChangeFavorite = () => {
		setStudents(
			students.map((person) => {
				if (person.id === id) {
					return { ...person, is_favorite: !person.is_favorite };
				} else {
					return person;
				}
			}),
			'students',
		);

		setStudent({ ...student, is_favorite: !student.is_favorite });
	};

	return (
		<>
			<BreadCrumbs />
			<div className={className}>
				{/* <BreadCrumbs /> */}
				<div className="leftColumn">
					{student.is_favorite ? (
						<img className="star" src={starFull} alt="star" />
					) : (
						<img className="star" src={starEmpty} alt="star" />
					)}
					<img src={student.image_url} alt="ava" />
					{student.badge.map((elem) => (
						<Badge
							key={elem.id}
							color={elem.badge_color}
							content={elem.badge_name}
						/>
					))}
					<div className="favoriteButton">
						{student.is_favorite ? (
							<Button
								color="#b98591"
								onClick={onChangeFavorite}
								name="Убрать из избранного"
								type="закругленные края"
							/>
						) : (
							<Button
								color="#00f0ac"
								onClick={onChangeFavorite}
								name="Добавить в избранное"
								type="прямые края"
							/>
						)}
					</div>
				</div>
				<div className="content">
					<div className="topLine">
						<div className="mainInfo">
							<div className="name">{student.name}</div>
							<div>({student.age})</div>
						</div>
						<div className="social">
							{student.social_network.map((elem) => (
								<a key={elem.id} href={elem.link}>
									{elem.name}
								</a>
							))}
						</div>
					</div>
					<div className="progress">
						{student.stack.map((elem) => (
							<Progress
								key={elem.id}
								value={elem.value}
								name_technologie={elem.name_technology}
								color={elem.color}
								type="type is empty"
							/>
						))}
					</div>
					<ul>
						{student.merits.map((elem) => (
							<li key={elem.id}>{elem.text}</li>
						))}
					</ul>
					<div>{student.about_me}</div>
				</div>
			</div>
		</>
	);
};

export const Student = styled(StudentContainer)`
	display: flex;
	justify-content: space-between;
	background: #eee;
	font-weight: bold;
	bottom: 0;
	width: 920px;
	height: 100%;
	padding: 40px 40px;
	margin: auto;

	& img {
		width: 200px;
		height: 200px;
		border-radius: 5px;
	}

	& .content {
		padding-left: 40px;

		& div {
			margin-bottom: 10px;
		}

		& .topLine {
			display: flex;
			justify-content: space-between;
			font-size: 18px;

			& .mainInfo {
				display: flex;
			}

			& a {
				margin: 0 5px;
				color: black;
			}
		}

		& .progress {
			display: flex;
		}

		& li {
			margin-left: -20px;
			padding: 5px 0;
		}
	}

	& .name {
		font-size: 24px;
		margin: -6px 10px 0 0;
	}

	& .leftColumn {
		text-align: center;

		& .star {
			position: absolute;
			padding: 5px;
			width: 30px;
			height: 30px;
		}

		& .favoriteButton {
			margin-top: 30px;
		}
	}
`;
