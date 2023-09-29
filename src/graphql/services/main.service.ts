import { PrismaClient } from "@prisma/client";
import { extractSelection } from "../utils/extractSelections";
import { GraphQLResolveInfo } from "graphql";



interface GetCountriesArgs {
    info: GraphQLResolveInfo;
}

interface GetYearsArgs {
    info: GraphQLResolveInfo;
}

interface GetEstadosArgs {
    info: GraphQLResolveInfo;
}

interface GetMunicipiosArgs {
    info: GraphQLResolveInfo;
}

interface GetServiciosArgs {
    info: GraphQLResolveInfo;
}

const prisma = new PrismaClient();

export const getCountries = async ({ info }: GetCountriesArgs) => {
    const extractedSelections = extractSelection(info);

    return await prisma.countries.findMany();
};

export const getYears = async ({ info }: GetYearsArgs) => {
    const extractedSelections = extractSelection(info);
   
    return await prisma.years.findMany();
};

export const getEstados = async ({ info }: GetYearsArgs) => {
    const extractedSelections = extractSelection(info);

    return await prisma.estados.findMany();
};

export const getMunicipios = async ({ info }: GetYearsArgs) => {
    const extractedSelections = extractSelection(info);

    return await prisma.municipios.findMany();
};

export const getServicios = async ({ info }: GetYearsArgs) => {
    const extractedSelections = extractSelection(info);

    return await prisma.servicios.findMany();
};