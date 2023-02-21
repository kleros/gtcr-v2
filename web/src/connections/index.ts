import { injectedConnection } from "./metaMask";
import { networkConnection } from "./network";

const CONNECTIONS = [injectedConnection, networkConnection];
export default CONNECTIONS;

export * from "./network";
export * from "./metaMask";
