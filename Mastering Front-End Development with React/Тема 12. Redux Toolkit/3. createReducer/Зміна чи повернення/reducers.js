const reducer = createReducer([], (builder) => {
  builder.addCase(doSomething, (state, action) => {
    // ❌ Так робити не можна, буде згенеровано виняток
    state.push(action.payload);
    return state.map((value) => value * 2);
  });
});
