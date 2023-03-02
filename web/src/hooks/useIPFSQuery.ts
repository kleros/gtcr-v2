import useSWR from "swr";

export const useIPFSQuery = (ipfsPath?: string) => {
  const { data, error } = useSWR(
    () => (ipfsPath !== undefined ? ipfsPath : false),
    async () => {
      if (ipfsPath) {
        return fetch(`https://ipfs.kleros.io${ipfsPath}`).then((res) =>
          res.json()
        );
      } else throw Error;
    }
  );
  const result = data || undefined;
  return {
    data: result,
    isLoading: !error && !data,
    error: error,
  };
};
