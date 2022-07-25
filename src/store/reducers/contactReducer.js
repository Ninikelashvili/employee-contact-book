const initalState = [];

const contactReducer = (state = initalState, action) => {
  switch (action.type) {
    case "ADDCONTACT":
      state = [...state, action.payload];
      return state;
    case "DELETECONTACT":
      const filterContact = state.filter(
        (contact) => contact.id !== action.payload && contact
      );
      state = filterContact;
      return state;
    case "UPDATECONTACT":
      const updateState = state.map((contact) =>
        contact.id === action.payload.id ? action.payload : contact
      );
      state = updateState;
      return state;
    default:
      return state;
  }
};

export default contactReducer;
