import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers";

// GraphQL 서버 만들기 (schema 부분에는 schema.graphql에서 정의된 것 끌어다 쓴다)
const server = new GraphQLServer({
    typeDefs: "graphql/schema.graphql",
    resolvers: resolvers
});
server.start(()=> console.log("Server is running"));