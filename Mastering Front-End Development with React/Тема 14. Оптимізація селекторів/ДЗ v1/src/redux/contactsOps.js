import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// Встановлюємо базову URL для запитів на mockapi.io
axios.defaults.baseURL = "https://678011940476123f76a97114.mockapi.io";

// Отримати всі контакти
export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get("/contacts");
      return data; // це і буде payload у fulfilled
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Додати новий контакт
export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contactData, thunkAPI) => {
    try {
      const { data } = await axios.post("/contacts", contactData);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Видалити контакт по ID
export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      await axios.delete(`/contacts/${contactId}`);
      return contactId;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
