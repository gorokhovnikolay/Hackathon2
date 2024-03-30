export const setStudents = (db, key) => {
	if (localStorage.getItem(key)) {
		return;
	}
	localStorage.setItem(key, JSON.stringify(db));
};
