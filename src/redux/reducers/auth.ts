const initialState = {
    isAuthenticated: false,
    token: null,
    id: null
};

const auth = (state = initialState, action: any) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default auth;