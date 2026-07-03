export interface ChatMessage {
  id: string;
  role: "user" | "assistant" | "system";
  content: string;
  createdAt: Date;
}

export interface Vehicle {
  id: string;
  make: string;
  model: string;
  year: number;
  vin?: string;
  plate?: string;
  mileage?: number;
}

export interface RepairRecord {
  id: string;
  vehicleId?: string;
  shopId?: string;
  title: string;
  description: string;
  status: "PENDING" | "IN_PROGRESS" | "COMPLETED" | "CANCELLED";
  cost?: number;
  currency: string;
  date: Date;
  notes?: string;
  vehicle?: Vehicle;
  shop?: ShopInfo;
}

export interface ShopInfo {
  id: string;
  name: string;
  address: string;
  city: string;
  country: string;
  postalCode?: string;
  phone?: string;
  email?: string;
  website?: string;
  latitude: number;
  longitude: number;
  rating?: number;
  specialties: string[];
  verified: boolean;
}

export interface CostEstimate {
  repairType: string;
  vehicleMake: string;
  vehicleModel: string;
  vehicleYear: number;
  estimatedCostLow: number;
  estimatedCostHigh: number;
  currency: string;
  laborHours: number;
  partsEstimate: number;
  laborEstimate: number;
  notes: string;
}

export interface ChatStreamChunk {
  content: string;
  done: boolean;
}
