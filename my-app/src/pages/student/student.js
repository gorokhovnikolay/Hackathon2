import { useState } from 'react';
import styled from 'styled-components';
import starFull from '../../img/star-full.png';
import starEmpty from '../../img/star-empty.png';
import { useParams } from 'react-router';
import { BreadCrumbs } from '../../components';
import { getStudents, setStudents } from '../../localstorage';
import { Badge } from '../../components';
import ProgressBar from '../../components/progress/progress';
import Button from '../../components/button/button';

const StudentContainer = ({ className }) => {
	const { id } = useParams();

	const [studentss, setStudentss] = useState(getStudents('students'));
	const [student, setStudent] = useState(studentss.find((person) => person.id === id));

	const onChangeFavorite = () => {
		setStudents(
			studentss.map((person) => {
				if (person.id === id) {
					return { ...person, is_favorite: !person.is_favorite };
				} else {
					return person;
				}
			}),
			'students',
		);
		setStudentss(getStudents('students'));
		const newStudent = getStudents('students').find((person) => person.id === id);
		setStudent(newStudent);
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
						<Badge key={elem.id} badge_color="red" color="red">
							{elem.name_badge}
						</Badge>
					))}
					<div className="favoriteButton">
						{student.is_favorite ? (
							<Button
								width="200px"
								color="#b98591"
								onClick={onChangeFavorite}
								children="Убрать из избранного"
								type="button"
							/>
						) : (
							<Button
								width="200px"
								color="#1b1b1b"
								onClick={onChangeFavorite}
								children="Добавить в избранное"
								type="button"
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
						{student.stack.map((elem, index) => (
							<div key={elem.id} className="progressContainer">
								<p>{elem.name_technologie}</p>
								{index === 0 && (
									<ProgressBar type="circle" procent={elem.value} />
								)}
								{index === 1 && (
									<ProgressBar type="pie" procent={elem.value} />
								)}
								{index === 2 && (
									<ProgressBar
										height="30px"
										degree="100"
										procent={elem.value}
										borderWidth="2px"
										borderColor="#1b1b1b"
									/>
								)}
								{index === 3 && (
									<ProgressBar
										height="100px"
										degree="360"
										procent={elem.value}
										borderWidth="2px"
										borderColor="#1b1b1b"
									/>
								)}
							</div>
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
	background-color: rgba(217, 217, 217, 0.5);
	display: flex;
	justify-content: space-between;
	font-weight: bold;
	bottom: 0;
	width: 920px;
	height: 100%;
	padding: 40px 40px;
	margin: auto;
	border-radius: 20px;

	& img {
		width: 200px;
		height: 200px;
		border-radius: 5px;
		object-fit: cover;
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
			gap: 10px;
			& .progressContainer {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
			}
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
