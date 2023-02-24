import useSWR from "swr";
import {
  GetCrossChainTasksDocument,
  GetCrossChainTasksQuery,
} from "../../../.graphclient";

export const useAllTasks = (first: number, chainNames: string[]) => {
  const { data, error, isValidating } = useSWR({
    query: GetCrossChainTasksDocument,
    variables: { first: first, chainNames: chainNames },
  });
  const result = data ? (data as GetCrossChainTasksQuery) : undefined;
  return { data: result, error, isValidating };
};
