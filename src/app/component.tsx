import { getServerContext } from "./getServerContext";

export const MyServerComponent = () => {
  const ServerContext = getServerContext();
  ServerContext.calledByNested = true;
  console.log("Shared object in nested:", ServerContext);
  return <div>{JSON.stringify(ServerContext)}</div>;
};
