import * as actions from "./actionTypes";

export const addContact = () => {
  return {
    type: actions.addContact,
  };
};

export const deleteContact = () => {
  return {
    type: actions.deleteContact,
  };
};

export const updateContact = () => {
  return {
    type: actions.updateContact,
  };
};
