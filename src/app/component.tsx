import { getSharedObject } from "./getSharedObject";

export const MyServerComponent = () => {
  const sharedObject = getSharedObject();
  sharedObject.calledByNested = true;
  console.log("Shared object in nested:", sharedObject);
  return <div>{JSON.stringify(sharedObject)}</div>;
};
