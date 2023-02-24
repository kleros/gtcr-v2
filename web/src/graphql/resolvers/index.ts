import { Resolvers } from "../../../.graphclient";

export const resolvers: Resolvers = {
  Task: {
    // chainName can exist already in root as we pass it in the other resolver
    chainName: (root, args, context, info) =>
      root.chainName || context.chainName || "gnosis",
  },
  Query: {
    crossChainTasks: async (root, args, context, info) =>
      Promise.all(
        args.chainNames.map((chainName) =>
          context.Linguo.Query.tasks({
            root,
            args,
            context: {
              ...context,
              chainName,
            },
            info,
          }).then((tasks) =>
            // We send chainName here so we can take it in the resolver above
            tasks.map((task) => ({
              ...task,
              chainName,
            }))
          )
        )
      ).then((allTasks) => allTasks.flat()),
  },
};
