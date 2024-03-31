import { useLocation } from 'react-router';
import styled from 'styled-components';
import { getStudents } from '../../localstorage';

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
						<>
							<a href={`/`}>Главная</a>
							<div> / </div>
						</>
					);
				}
				if (path === 'student') {
					return <a href={`/${path}/${student.id}`}>{student.name}</a>;
				}

				if (path === 'favorits') {
					return <a href={`/${path}`}>избранное</a>;
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
`;
