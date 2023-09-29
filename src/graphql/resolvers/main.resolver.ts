import { GraphQLResolveInfo } from "graphql";
import { getYears, getCountries, getEstados, getMunicipios, getServicios } from "../services/main.service";


export const yearsResolver = {
    Query: {
        async years(_: any, args: Record<string, any>, context: any, info: GraphQLResolveInfo) {
            return await getYears({ info });

        },

    },
    Mutation: {
        /* async createYears(_: any, { input }: Record<string, any>) {
             //return await createUser({ email: input.email, username: input.username });
         },
         async updateYears() { },
         async deleteYears() { },*/
    },
};

export const countriesResolver = {
    Query: {
        async countries(_: any, args: Record<string, any>, context: any, info: GraphQLResolveInfo) {
            return await getCountries({ info });

        },

    },
    Mutation: {
        /* async createYears(_: any, { input }: Record<string, any>) {
             //return await createUser({ email: input.email, username: input.username });
         },
         async updateYears() { },
         async deleteYears() { },*/
    },
};


export const estadosResolver = {
    Query: {
        async estados(_: any, args: Record<string, any>, context: any, info: GraphQLResolveInfo) {
            return await getEstados({ info });

        },

    },
    Mutation: {
        /* async createYears(_: any, { input }: Record<string, any>) {
             //return await createUser({ email: input.email, username: input.username });
         },
         async updateYears() { },
         async deleteYears() { },*/
    },
};

export const municipiosResolver = {
    Query: {
        async municipios(_: any, args: Record<string, any>, context: any, info: GraphQLResolveInfo) {
            return await getMunicipios({ info });

        },

    },
    Mutation: {
        /* async createYears(_: any, { input }: Record<string, any>) {
             //return await createUser({ email: input.email, username: input.username });
         },
         async updateYears() { },
         async deleteYears() { },*/
    },
};

export const serviciosResolver = {
    Query: {
        async servicios(_: any, args: Record<string, any>, context: any, info: GraphQLResolveInfo) {
            return await getServicios({ info });

        },

    },
    Mutation: {
        /* async createYears(_: any, { input }: Record<string, any>) {
             //return await createUser({ email: input.email, username: input.username });
         },
         async updateYears() { },
         async deleteYears() { },*/
    },
};