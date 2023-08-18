export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const EMAIL_MISMATCH_ERROR = 'EMAIL_MISMATCH_ERROR';
export const PASSWORD_MISMATCH_ERROR = 'PASSWORD_MISMATCH_ERROR';

export const LOGOUT = 'LOGOUT';

export const loginSuccess = (token, userInfo) => ({
    type: LOGIN_SUCCESS,
    payload: { token, userInfo },
});

export const loginFailure = (error) => ({
    type: LOGIN_FAILURE,
    payload: error,
});

export const emailMismatchError = (error) => ({
    type: EMAIL_MISMATCH_ERROR,
    payload: error,
  });

export const passwordMismatchError = (error) => ({
type: PASSWORD_MISMATCH_ERROR,
payload: error,
});

export const logoutAction = () => ({
    type: LOGOUT,
});