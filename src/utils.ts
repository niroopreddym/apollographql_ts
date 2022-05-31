    import {client} from "../database/mockdb"

    export const createUserTable = async() => {
        const query = `
        Create Table users (
            email varchar,
            firstName varchar,
            lastName varchar,
            age int
        );
        `;
    }