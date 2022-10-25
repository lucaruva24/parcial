"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
exports.default = (0, config_1.registerAs)('config', () => {
    return {
        postgres: {
            user: process.env.DATABASE_USER,
            password: process.env.DATABASE_PASS,
            dbName: process.env.DATABASE_NAME,
            host: process.env.DATABASE_HOST,
            port: parseInt(process.env.DATABASE_PORT),
        },
    };
});
//# sourceMappingURL=config.js.map