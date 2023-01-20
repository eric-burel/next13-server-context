import { cache } from "react";

export const getServerContext: () => { createdAt: string, calledByLayout: boolean, calledByPage: boolean, calledByNested: boolean } = cache(() => ({
    createdAt: Date.now().toString(),
    calledByLayout: false,
    calledByPage: false,
    calledByNested: false
}))