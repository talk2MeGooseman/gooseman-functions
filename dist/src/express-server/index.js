"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createServer = void 0;
const apollo_server_express_1 = require("apollo-server-express");
const schema_1 = __importDefault(require("../schema"));
const graphql_depth_limit_1 = __importDefault(require("graphql-depth-limit"));
const fieldResolver_1 = require("../middleware/fieldResolver");
function createServer(context) {
    return new apollo_server_express_1.ApolloServer({
        schema: schema_1.default,
        validationRules: [graphql_depth_limit_1.default(7)],
        context: context,
        fieldResolver: fieldResolver_1.snakeCaseFieldResolver,
    });
}
exports.createServer = createServer;
//# sourceMappingURL=index.js.map