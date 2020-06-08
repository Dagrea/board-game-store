export const logIn = account => ({
	type: 'LOG_IN',
	payload: account,
})
export const changeAccountData = account => ({
	type: 'CHANGE_ACCOUNT_DATA',
	payload: account,
})
export const logOut = account => ({
	type: 'LOG_OUT',
	payload: account,
})