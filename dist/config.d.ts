declare const _default: (() => {
    postgres: {
        user: string;
        password: string;
        dbName: string;
        host: string;
        port: number;
    };
}) & import("@nestjs/config").ConfigFactoryKeyHost<{
    postgres: {
        user: string;
        password: string;
        dbName: string;
        host: string;
        port: number;
    };
}>;
export default _default;
