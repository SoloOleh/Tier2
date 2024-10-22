import axios from "axios";

// axios.get("https://jsonplaceholder.typicode.com/users").then().catch();

// axios.get("https://jsonplaceholder.typicode.com/posts").then().catch();

// axios.get("https://jsonplaceholder.typicode.com/images").then().catch();

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

axios.get("/users").then().catch();

axios.get("/posts").then().catch();

axios.get("/images").then().catch();
