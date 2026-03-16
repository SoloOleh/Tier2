import jwt from "jsonwebtoken";
import "dotenv/config";

const {JWT_SECRET} = process.env;

const payload = {
    id: 1,
};

const token = jwt.sign(payload, JWT_SECRET, {expiresIn: "24h"});
// console.log(token);
const decodeToken = jwt.decode(token);
// console.log(decodeToken)

try {
    const {id} = jwt.verify(token, JWT_SECRET);
    console.log(id);
    const invalidTOken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzYzNDA1NzIyLCJleHAiOjE3NjM0OTIxMjJ9.V3iDZeunX0YzeJSuhY_ROxYYsjo1ul_Dq6sJ5Tngyu5";
    jwt.verify(invalidTOken, JWT_SECRET);
}
catch(error) {
    console.log(error.message);
}