export const setStudents = (db, key) => {
	localStorage.setItem(key, JSON.stringify(db));
};
