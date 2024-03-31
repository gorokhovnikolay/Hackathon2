import { useLocation } from 'react-router';
import styled from 'styled-components';
import { getStudents } from '../../localstorage';
import { Link } from 'react-router-dom';

export const BreadCrumbsContainer = ({ className }) => {
	const location = useLocation();
	const students = getStudents('students');

	const locationArr = location.pathname.split('/');

	let student = {};

	if (locationArr[1] === 'student') {
		student = students.find((person) => {
			return person.id === locationArr[2];
		});
	}

	return (
		<div className={className}>
			{locationArr.map((path, i) => {
				if (i === 0) {
					return (
						<div className="main-breadcrumbs" key={i}>
							<Link to="/">Главная</Link>
							<div> / </div>
						</div>
					);
				}
				if (path === 'student') {
					return (
						<Link key={i} to={`/${path}/${student.id}`}>
							{student.name}
						</Link>
					);
				}

				if (path === 'favorits') {
					return (
						<Link key={i} to={`/${path}`}>
							избранное
						</Link>
					);
				}

				return null;
			})}
		</div>
	);
};

export const BreadCrumbs = styled(BreadCrumbsContainer)`
	display: flex;
	width: 960px;
	margin-bottom: 15px;
	padding-left: 40px;
	font-size: 18px;

	& a {
		color: black;
		text-decoration: none;
	}
	& .main-breadcrumbs {
		display: flex;
	}
`;
