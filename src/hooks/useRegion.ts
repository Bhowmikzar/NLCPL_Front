import { useState, useEffect } from 'react';

interface RegionData {
  isIndia: boolean;
  currency: 'INR' | 'USD';
  currencySymbol: '₹' | '$';
  locale: string;
}

export const useRegion = (): RegionData => {
  const [regionData, setRegionData] = useState<RegionData>({
    isIndia: false,
    currency: 'USD',
    currencySymbol: '$',
    locale: 'en-US',
  });

  useEffect(() => {
    const detectRegion = (): boolean => {
      // Check timezone
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const indianTimezones = ['Asia/Kolkata', 'Asia/Calcutta'];
      
      if (indianTimezones.includes(timezone)) {
        return true;
      }

      // Check navigator language
      const language = navigator.language || (navigator as any).userLanguage;
      const indianLocales = ['hi', 'hi-IN', 'en-IN', 'bn-IN', 'ta-IN', 'te-IN', 'mr-IN', 'gu-IN', 'kn-IN', 'ml-IN', 'pa-IN'];
      
      if (indianLocales.some(loc => language.startsWith(loc) || language === loc)) {
        return true;
      }

      // Check for IST offset (+5:30)
      const offset = new Date().getTimezoneOffset();
      if (offset === -330) {
        return true;
      }

      return false;
    };

    const isIndia = detectRegion();
    
    setRegionData({
      isIndia,
      currency: isIndia ? 'INR' : 'USD',
      currencySymbol: isIndia ? '₹' : '$',
      locale: isIndia ? 'en-IN' : 'en-US',
    });
  }, []);

  return regionData;
};

export const formatPrice = (priceINR: number, priceUSD: number, region: RegionData): string => {
  const price = region.isIndia ? priceINR : priceUSD;
  return new Intl.NumberFormat(region.locale, {
    style: 'currency',
    currency: region.currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};
