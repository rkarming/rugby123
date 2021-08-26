function confirmLeave() {
	var yes_leave = window.confirm("Are you sure you want to leave Rugby123 - Start Playing Rugby Today?");
		if (!yes_leave) {
			return false;
		}
	return true;
}