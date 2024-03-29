import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Main } from './pages';

export const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Main />} />
			<Route path="/favorits" element={<div>Избранные</div>} />
			<Route path="/student" element={<div>Студент</div>} />
			<Route path="*" element={<div>Ошибка</div>} />
		</Routes>
	);
};
