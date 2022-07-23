const initialState = {
    isAuthenticated: true,
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