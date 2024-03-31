import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Main } from './pages';
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
	padding: 100px 0;
	min-height: 100%;
`;

const Header = styled.div`
	position: fixed;
	height: 100px;
	width: 1000px;
	background-color: #d9d9d9;
	text-align: center;
	line-height: 100px;
	font-size: 40px;
`;

const Footer = styled.div`
	height: 100px;
	width: 1000px;
	background-color: #d9d9d9;
	text-align: center;
	line-height: 100px;
	font-size: 40px;
`;

export const App = () => {
	return (
		<AppColumn>
			<Header>Header/</Header>
			<Content>
				<Routes>
					<Route path="/" element={<Main />} />
					<Route path="/favorits" element={<div>Избранные</div>} />
					<Route path="/student" element={<div>Студент</div>} />
					<Route path="*" element={<div>Ошибка</div>} />
				</Routes>
			</Content>
			<Footer> Footer/</Footer>
		</AppColumn>
	);
};
