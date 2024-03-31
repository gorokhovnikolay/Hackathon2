import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Main, Student } from './pages';
import { setStudents } from './localstorage';
import { db } from './db';
import { Header, Footer } from './components';
import styled from 'styled-components';

const AppColumn = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	min-height: 100%;
	width: 1000px;
	margin: 0 auto;
	background-color: rgba(217, 217, 217, 0.5);
`;

const Content = styled.div`
	padding: 0 0 100px 0;
	min-height: 100%;
`;

export const App = () => {
	if (localStorage.getItem('students') === null) {
		setStudents(db, 'students');
	}

	return (
		<AppColumn>
			<Header />
			<Content>
				<Routes>
					<Route path="/" element={<Main />} />
					<Route path="/favorits" element={<div>Избранные</div>} />
					<Route path="/student/:id" element={<Student />} />
					<Route path="*" element={<div>Ошибка</div>} />
				</Routes>
			</Content>
			<Footer />
		</AppColumn>
	);
};

export const Page = styled.div`
	margin: 0 auto;
	width: 1000px;
	height: 100%;
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	margin: 0 auto;
	background: #fff;
`;
