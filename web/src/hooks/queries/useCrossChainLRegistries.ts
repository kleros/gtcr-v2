import useSWR from "swr";
import {
  GetCrossChainLRegistriesDocument,
  GetCrossChainLRegistriesQuery,
} from "../../../.graphclient";

interface QueryResponse {
  data: GetCrossChainLRegistriesQuery | undefined;
  error: any;
}

interface QueryOptions {
  orderBy?: string;
  orderDirection?: string;
  sortByChains?: boolean;
}

export const useCrossChainLRegistries = (
  first: number,
  chainNames: string[],
  { orderBy = "", orderDirection = "", sortByChains = false }: QueryOptions = {}
) => {
  const { data: queryResponse, error } = useSWR<QueryResponse>({
    query: GetCrossChainLRegistriesDocument,
    variables: { first, chainNames, orderBy, orderDirection },
  });

  return {
    data: sortByChains
      ? sortDataByChains(queryResponse?.data, chainNames)
      : queryResponse?.data,
    error,
  };
};

const sortDataByChains = (
  data: GetCrossChainLRegistriesQuery | undefined,
  chainNames: string[]
) => {
  const formattedData: Record<string, any[]> = {};

  if (data) {
    data.crossChainLRegistries.forEach((registry) => {
      const { chainName } = registry;
      if (chainName && chainNames.includes(chainName)) {
        if (!formattedData[chainName]) {
          formattedData[chainName] = [];
        }
        formattedData[chainName].push(registry);
      }
    });
  }
  return formattedData;
};
