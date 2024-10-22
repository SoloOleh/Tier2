import axios from "axios";

const myApiKey = "secret-api-key-for-every-request";

axios.defaults.headers.common["header-name"] = myApiKey;
