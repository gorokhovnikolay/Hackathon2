import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Main } from './pages';
import { setStudents } from './localstorage';
import { db } from './db';
import { Header, Footer } from './components';
import styled from 'styled-components';

export const App = () => {
	useEffect(() => {
		setStudents(db, 'students');
	}, []);

	return (
		<>
			<Container>
				<Header />
				<Page>
					<Routes>
						<Route path="/" element={<Main />} />
						<Route path="/favorits" element={<div>Избранные</div>} />
						<Route path="/student" element={<div>Студент</div>} />
						<Route path="*" element={<div>Ошибка</div>} />
					</Routes>
				</Page>
				<Footer />
			</Container>
		</>
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
