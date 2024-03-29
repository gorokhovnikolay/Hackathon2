import React from 'react';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
	return (
		<Routes>
			<Route path="/" element={<div>Главная</div>} />
			<Route path="/favorits" element={<div>Избранные</div>} />
			<Route path="/student" element={<div>Студент</div>} />
			<Route path="*" element={<div>Ошибка</div>} />
		</Routes>
	);
};
