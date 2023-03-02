import { Resolvers } from "../../../.graphclient";

export const resolvers: Resolvers = {
  LRequest: {
    // chainName can exist already in root as we pass it in the other resolver
    chainName: (root, args, context, info) =>
      root.chainName || context.chainName || "gnosis",
  },
  LRegistry: {
    // chainName can exist already in root as we pass it in the other resolver
    chainName: (root, args, context, info) =>
      root.chainName || context.chainName || "gnosis",
  },
  Query: {
    crossChainLRequests: async (root, args, context, info) =>
      Promise.all(
        args.chainNames.map((chainName: string) =>
          context.GeneralizedTCR.Query.lrequests({
            root,
            args,
            context: {
              ...context,
              chainName,
            },
            info,
          }).then((requests) =>
            // We send chainName here so we can take it in the resolver above
            requests.map((request) => ({
              ...request,
              chainName,
            }))
          )
        )
      ).then((allLRequests) => allLRequests.flat()),
    crossChainLRegistries: async (root, args, context, info) =>
      Promise.all(
        args.chainNames.map((chainName: string) =>
          context.GeneralizedTCR.Query.lregistries({
            root,
            args,
            context: {
              ...context,
              chainName,
            },
            info,
          }).then((registries) =>
            // We send chainName here so we can take it in the resolver above
            registries.map((registry) => ({
              ...registry,
              chainName,
            }))
          )
        )
      ).then((allLRegistries) => allLRegistries.flat()),
  },
};
