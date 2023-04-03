export enum ProductCategory {
    DAIRY = "DAIRY",
    BAKED_GOODS = "BAKED_GOODS",
    VEGETABLES = "VEGETABLES"
}
export interface ProductEvent {
    productId: string,
    productName: string,
    productCategory: ProductCategory
    sensorFillData: number
}
