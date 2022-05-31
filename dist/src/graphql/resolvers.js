"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const mockdb_1 = require("../../database/mockdb");
exports.resolvers = {
    Query: {
        organisations: () => mockdb_1.organisations,
    },
};
