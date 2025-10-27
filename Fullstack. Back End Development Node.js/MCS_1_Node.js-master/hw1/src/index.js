// invokeAction({ action: "list" });
// invokeAction({ action: "getById", id: "u9kgwNWGi3uUUwh0b8V48" });
// invokeAction({ action: "add", title: "Avatar: way of water", director: "James Cameron" });
// invokeAction({ action: "updateById", id: "Uw5RUOKvY5m43R6-zUpil", title: "Avatar: Way of water" });
// invokeAction({ action: "deleteById", id: "Uw5RUOKvY5m43R6-zUpil" });

import { program } from "commander";

import {
  listContacts,
  getContactById,
  addContact,
  removeContact,
} from "./contacts.js";

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse();

const options = program.opts();

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const allContacts = await listContacts();
      return console.log(allContacts);

    case "get":
      const oneContact = await getContactById(id);
      return console.log(oneContact);

    case "add":
      const newContact = await addContact(id, name, email, phone);
      return console.log(newContact);

    case "remove":
      const deleteContact = await removeContact(id);
      return console.log(deleteContact);

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(options);
