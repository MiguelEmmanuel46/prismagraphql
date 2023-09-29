import { readFileSync } from "fs";
import path from "path";
import { yearsResolver, countriesResolver, estadosResolver, municipiosResolver, serviciosResolver } from "./resolvers/main.resolver";


const yearsTypes = readFileSync(path.join(__dirname, "./typeDefs/typeDefinitions.graphql"), {
    encoding: "utf-8",
});

const countriesTypes = readFileSync(path.join(__dirname, "./typeDefs/typeDefinitions.graphql"), {
    encoding: "utf-8",
});

const estadosTypes = readFileSync(path.join(__dirname, "./typeDefs/typeDefinitions.graphql"), {
    encoding: "utf-8",
});

const municipiosTypes = readFileSync(path.join(__dirname, "./typeDefs/typeDefinitions.graphql"), {
    encoding: "utf-8",
});

export const typeDefs = `
    ${yearsTypes},
    ${countriesTypes}
`;

export const resolvers = {
  Query:{
    ...yearsResolver.Query,
    ...countriesResolver.Query,
    ...estadosResolver.Query,
    ...municipiosResolver.Query,
    ...serviciosResolver.Query,
  }

};