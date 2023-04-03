import {ProductEvent} from "./ProductEvent";

export interface MarketResponse {
    marketName: string,
    lastMessages: ProductEvent[]
}
