import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { FiTrash, FiEdit2 } from "react-icons/fi";
import { Link } from "react-router-dom";
import { deleteContact } from "../store/actions/actionTypes";

const ContactList = React.memo(() => {
  const contacts = useSelector((state) => state.contactReducer);
  const dispatch = useDispatch();

  const deleteHandler = useCallback(
    (id) => {
      dispatch({ type: deleteContact, payload: id });
    },
    [dispatch]
  );

  return (
    <ListDiv>
      <h2>Your list is here</h2>
      {contacts.map((contact, i) => (
        <OneContact key={i}>
          <h3>{contact.name}</h3>
          <p>{contact.email}</p>
          <p>{contact.number}</p>
          <span>
            <button onClick={() => deleteHandler(contact.id)}>
              <FiTrash />
            </button>
            <Link to={`/edit/${contact.id}`}>
              <button>
                <FiEdit2 />
              </button>
            </Link>
          </span>
        </OneContact>
      ))}
    </ListDiv>
  );
});

const OneContact = styled.div`
  border-bottom: solid 0.5px #fff;
  padding: 10px 0;
  margin: 20px 0;
  @media (max-width: 725px) {
    P {
      min-width: 0%;
    }
  }
  p {
    font-size: 12px;
    font-family: system-ui;
    font-weight: 200;
    letter-spacing: 2px;
    color: #6c757d;
    min-width: 20%;
    margin-bottom: 10px;
    @media (max-width: 725px) {
      min-width: 0%;
    }
  }
  h3 {
    color: #000;
    font-weight: 200;
    font-family: system-ui;
    min-width: 20%;
    margin-bottom: 10px;
  }
`;

const ListDiv = styled.div`
  @media (max-width: 780px) {
    padding: 10px;
  }
  h2 {
    margin: 30px 0;
    font-size: 25px;
    font-family: system-ui;
    font-weight: 200;
    letter-spacing: 2px;
    color: #6c757d;
  }
  text-align: center;
  padding: 60px;
  div {
    @media (max-width: 630px) {
      flex-direction: column;
    }
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    button {
      background: none;
      border: none;
      outline: none;
      font-size: 20px;
      cursor: pointer;
      margin: 0 10px;
    }
  }
  span {
    margin-bottom: 10px;
    svg {
      color: #6c757d;
      transition: all 0.5s ease-in;
      :hover {
        transform: scale(1.2);
      }
    }
  }
`;

export default ContactList;
