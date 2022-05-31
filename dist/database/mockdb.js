"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.organisations = void 0;
exports.organisations = [
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
const pg_1 = require("pg");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
console.log("hostname:", process.env.DB_HOST);
const client = new pg_1.Client({
    user: "postgres",
    host: "localhost",
    database: "postgres",
    password: "postgres",
    port: 5432,
});
client.connect();
