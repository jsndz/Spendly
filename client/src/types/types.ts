import {
  FileText,
  BarChart3,
  Wallet,
  CreditCard,
  Tags,
} from "lucide-react";

export type Item = {
  url: string;
};



export const navigationItems = [
  {
    name: "Records",
    logo: FileText,
  },
  {
    name: "Analysis",
    logo: BarChart3,
  },
  {
    name: "Budget",
    logo: Wallet,
  },
  {
    name: "Accounts",
    logo: CreditCard,
  },
  {
    name: "Categories",
    logo: Tags,
  },
];