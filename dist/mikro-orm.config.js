"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Post_1 = require("./entities/Post");
const constants_1 = require("./constants");
exports.default = {
    migrations: {
        path: "./migrations",
        pathTs: undefined,
    },
    entities: [Post_1.Post],
    dbName: "lireddit",
    type: "postgresql",
    debug: !constants_1._prod_,
};
//# sourceMappingURL=mikro-orm.config.js.map