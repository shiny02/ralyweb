
// secrets.js
const secrets = {
    // dbUri: process.env.DB_URI
    dbUri: "3j8D6236@"
  };
  
  export const getSecret = key => secrets[key];