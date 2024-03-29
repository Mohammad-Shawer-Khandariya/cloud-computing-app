export enum SortByValue {
  ConsumedQuantity = "ConsumedQuantity",
  Cost = "Cost",
}

export interface CloudComputingData {
  ConsumedQuantity: string;
  Cost: string;
  Date: string;
  InstanceId: string;
  MeterCategory: string;
  ResourceGroup: string;
  ResourceLocation: string;
  Tags: {
    "app-name": string;
    environment: string;
    "business-unit": string;
  };
  UnitOfMeasure: string;
  Location: string;
  ServiceName: string;
}
