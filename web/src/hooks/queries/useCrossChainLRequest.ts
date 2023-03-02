import useSWR from "swr";
import {
  GetCrossChainLRequestsDocument,
  GetCrossChainLRequestsQuery,
} from "../../../.graphclient";

export const useCrossChainLRequest = (first: number, chainNames: string[]) => {
  const { data, error, isValidating } = useSWR({
    query: GetCrossChainLRequestsDocument,
    variables: { first: first, chainNames: chainNames },
  });
  const result = data ? (data as GetCrossChainLRequestsQuery) : undefined;
  return { data: result, error, isValidating };
};
