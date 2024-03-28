import { Asset } from "./asset";

export type Investment = {
    id:     number;
    asset:  Asset;
    amount: number;
}