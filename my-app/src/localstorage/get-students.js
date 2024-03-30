export const getStudents = (key) => {
	const data = localStorage.getItem(key);
	const students = JSON.parse(data);
	return students;
};
