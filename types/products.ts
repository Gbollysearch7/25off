// Asset class types
export type AssetClassKey = 'cfd' | 'futures';

// Product type keys for each asset class
export type CfdProductType = '2-phase-swing' | '1-phase';
export type FuturesProductType = 'static-drawdown' | 'eod-drawdown';
export type ProductTypeKey = CfdProductType | FuturesProductType;

// Feature value types - support strings, numbers, and dollar amounts
export type FeatureValue = string | number | { amount: number; currency: 'USD' };

// Base account interface
export interface BaseAccount {
  value: number;
  label: string;
  fee: number;
  resetFee: number;
  popular?: boolean;
}

// CFD-specific account (extends base)
export interface CfdAccount extends BaseAccount {
  // CFD accounts use percentage-based values
}

// Futures-specific account with additional properties
export interface FuturesAccount extends BaseAccount {
  profitTarget: number; // Dollar amount
  maxContracts: string; // e.g., "5 Minis / 50 Micros"
  dailyDrawdown: string | number; // "None" or dollar amount
  maxDrawdown: number; // Dollar amount
  consistency: string; // e.g., "None"
}

// Feature interface
export interface Feature {
  key: string;
  label: string;
  value: FeatureValue;
  formatType?: 'percentage' | 'currency' | 'text' | 'number';
}

// Product configuration for each asset class + product type combination
export interface ProductConfig {
  assetClass: AssetClassKey;
  productType: ProductTypeKey;
  accounts: (CfdAccount | FuturesAccount)[];
  features: Feature[];
}

// Asset class configuration
export interface AssetClass {
  key: AssetClassKey;
  label: string;
  comingSoon?: boolean;
}

// Product type filter configuration
export interface ProductTypeFilter {
  key: ProductTypeKey;
  label: string;
}
