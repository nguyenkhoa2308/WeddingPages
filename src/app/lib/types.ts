// lib/types.ts

export interface FormData {
    name: string;
    phone: string;
    email: string;
    date: string;
    serviceType: string;
    budget: string;
    notes: string;
  }
  
  export interface FormErrors {
    [key: string]: string;
  }
  
  export interface MenuItem {
    label: string;
    path: string;
    dropdown?: SubMenuItem[] | null;
  }
  
  export interface SubMenuItem {
    label: string;
    path: string;
  }
  
  export interface ContactInfo {
    phone: string[];
    email: string[];
    address: {
      street: string;
      district: string;
      city: string;
    };
  }
  
  export interface SocialMedia {
    icon: string;
    label: string;
    href: string;
  }
  
  export interface PaymentMethod {
    name: string;
    color: string;
  }
  
  export type SubmitStatus = 'idle' | 'success' | 'error';
  export type NewsletterStatus = 'idle' | 'success' | 'error';