import React, { useEffect, useState, useCallback } from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { updateContact } from "../store/actions/actionTypes";

const EditContact = React.memo(() => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();
  const contacts = useSelector((state) => state.contactReducer);

  const currentContact = contacts.find(
    (contact) => contact.id === parseInt(id)
  );

  useEffect(() => {
    if (currentContact) {
      setName(currentContact.name);
      setEmail(currentContact.email);
      setNumber(currentContact.number);
      setDescription(currentContact.description);
    }
  }, [currentContact]);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      const checkEmail = contacts.find(
        (contact) => contact.id !== parseInt(id) && contact.email === email
      );
      const checkNumber = contacts.find(
        (contact) => contact.id !== parseInt(id) && contact.number === number
      );

      console.log(parseInt(id));

      if (!name || !email || !number || !description) {
        alert("Fill in all fields");
      } else if (checkEmail) {
        alert("This email already exists");
      } else if (checkNumber) {
        alert("This number already exists");
      } else {
        const contactData = {
          id: parseInt(id),
          name,
          email,
          number,
          description,
        };

        dispatch({ type: updateContact, payload: contactData });
        navigate("/list");
      }
    },
    [description, dispatch, email, name, navigate, number, contacts, id]
  );

  return (
    <AddContactForm onSubmit={handleSubmit}>
      {currentContact ? (
        <>
          <h2>Update Contact </h2>
          <div>
            <input
              type="text"
              placeholder="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="number"
              placeholder="number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
            <textarea
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <span>
            <button>Update</button>
            <Link to={"/list"}>
              <button>Cancel</button>
            </Link>
          </span>
        </>
      ) : (
        <span>There is no contact</span>
      )}
    </AddContactForm>
  );
});

const AddContactForm = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  padding: 50px 5px;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    input {
      width: 100%;
      padding: 20px;
      margin: 10px 0;
      border: solid 0.5px #fff;
      outline: none;
      background: transparent;
      ::placeholder {
        font-family: system-ui;
        letter-spacing: 1px;
        font-weight: 200;
      }
    }
    textarea {
      width: 100%;
      min-height: 100px;
      padding: 20px;
      border: solid 0.5px #fff;
      outline: none;
      background: transparent;
    }
  }
  button {
    padding: 15px 20px;
    margin: 5px;
    margin-top: 20px;
    border: solid 0.5px #fff;
    outline: none;
    background: transparent;
    color: #000;
    font-family: system-ui;
    font-weight: 200;
    cursor: pointer;
    transition: all 0.5s ease;
    :hover {
      box-shadow: 0 0 20px #c3c3c3;
    }
  }
  h2 {
    font-size: 25px;
    font-family: system-ui;
    font-weight: 200;
    letter-spacing: 2px;
    color: #6c757d;
    margin-bottom: 20px;
  }
`;

export default EditContact;
