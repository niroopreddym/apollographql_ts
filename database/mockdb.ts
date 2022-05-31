
export const organisations =  [
      {
        locations: [
          { locationID: 1, name: "location1" },
          { locationID: 2, name: "location2" },
        ],
        services: [
          { serviceID: 1, sname: "service1" },
          { serviceID: 2, sname: "service2" },
        ],
      },
      {
        locations: [
          { locationID: 11, name: "location11" },
          { locationID: 22, name: "location22" },
        ],
        services: [
          { serviceID: 11, sname: "service11" },
          { serviceID: 22, sname: "service22" },
        ],
      },
    ];

import { Client } from "pg";
import dotenv from "dotenv";
dotenv.config();

// console.log("hostname:", process.env.DB_HOST)
    
export const client = new Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: 5432,
});
client.connect();

client.query("SELECT NOW()", (err, res) => {
  console.log(err, res);
  client.end();
});
