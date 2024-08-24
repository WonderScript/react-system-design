const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: null,
  },
  reducers: {
    credentialsChanged: (state, action) => {
      const {user, accessToken} = action.payload;
      state.user = user;
      state.token = accessToken;
    },
    userLogOuted: state => {
      state.user = null;
      state.token = null;
    },
  },
});

export default authSlice.reducer;
export const {credentialsChanged, userLogOuted} = authSlice.actions;
