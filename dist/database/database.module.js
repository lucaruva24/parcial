"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("../config");
const typeorm_1 = require("@nestjs/typeorm");
const pg_1 = require("pg");
let DatabaseModule = class DatabaseModule {
};
DatabaseModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRootAsync({
                useFactory: (configService) => {
                    const { user, host, dbName, password, port } = configService.postgres;
                    return {
                        type: 'postgres',
                        host,
                        port,
                        username: user,
                        password,
                        database: dbName,
                        ssl: {
                            rejectUnauthorized: false,
                        },
                        autoLoadEntities: true,
                    };
                },
                inject: [config_1.default.KEY],
            }),
        ],
        providers: [
            {
                provide: 'PG',
                useFactory: (configService) => {
                    const { user, host, dbName, password, port } = configService.postgres;
                    const client = new pg_1.Client({
                        user,
                        host,
                        database: dbName,
                        password,
                        port,
                        ssl: {
                            rejectUnauthorized: false,
                        },
                    });
                    client.connect();
                    return client;
                },
                inject: [config_1.default.KEY],
            },
        ],
        exports: ['PG', typeorm_1.TypeOrmModule],
    })
], DatabaseModule);
exports.DatabaseModule = DatabaseModule;
//# sourceMappingURL=database.module.js.map