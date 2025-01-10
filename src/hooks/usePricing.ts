import { useState, useEffect } from 'react';
import { scraper } from '../utils/webScraper';

interface PricingOptions {
  currency: 'USD' | 'JPY';
  billingPeriod: 'monthly' | 'annual';
}

export const usePricing = () => {
  const [options, setOptions] = useState<PricingOptions>({
    currency: 'USD',
    billingPeriod: 'monthly'
  });
  const [exchangeRate, setExchangeRate] = useState<number>(157.728); // Current market rate as fallback
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        setIsLoading(true);
        // Updated selectors based on TradingView's current structure
        const selectors = [
          'h1[class*="title"] + div span', // Main price display
          'div[data-symbol="USDJPY"] span[class*="last"]', // Alternative location
          'div[class*="lastValue"]', // Another possible location
          '.tv-symbol-price-quote__value' // Fallback
        ];

        let rate: string | null = null;
        
        for (const selector of selectors) {
          try {
            rate = await scraper.scrape<string>({
              url: 'https://www.tradingview.com/symbols/USDJPY/',
              selector,
              transform: (value) => {
                // Clean and parse the value
                const cleaned = value.replace(/[^0-9.]/g, '');
                const parsed = parseFloat(cleaned);
                if (isNaN(parsed) || parsed < 100 || parsed > 200) { // Sanity check for JPY rate
                  throw new Error('Invalid rate format or value');
                }
                return parsed.toString();
              }
            });
            if (rate) {
              console.log(`Successfully fetched rate using selector: ${selector}`);
              break;
            }
          } catch (e) {
            console.log(`Selector ${selector} failed:`, e);
          }
        }

        if (rate) {
          setExchangeRate(Number(rate));
          console.log('Updated exchange rate:', rate);
        } else {
          console.error('All selectors failed, using current market rate');
          setExchangeRate(157.728); // Current market rate from TradingView
        }
      } catch (error) {
        console.error('Failed to fetch exchange rate:', error);
        setExchangeRate(157.728); // Current market rate from TradingView
      } finally {
        setIsLoading(false);
      }
    };

    if (options.currency === 'JPY') {
      fetchExchangeRate();
    } else {
      setIsLoading(false);
    }
  }, [options.currency]);

  const toggleCurrency = () => {
    setOptions(prev => ({
      ...prev,
      currency: prev.currency === 'USD' ? 'JPY' : 'USD'
    }));
  };

  const toggleBillingPeriod = () => {
    setOptions(prev => ({
      ...prev,
      billingPeriod: prev.billingPeriod === 'monthly' ? 'annual' : 'monthly'
    }));
  };

  const getPrice = (priceUSD: number): string => {
    let price = priceUSD;
    
    // Apply annual discount
    if (options.billingPeriod === 'annual') {
      price = price * 10; // 2 months free
    }
    
    // Convert to JPY if needed
    if (options.currency === 'JPY') {
      price = Math.round(price * exchangeRate);
    }
    
    return new Intl.NumberFormat(options.currency === 'USD' ? 'en-US' : 'ja-JP', {
      style: 'currency',
      currency: options.currency,
      maximumFractionDigits: options.currency === 'JPY' ? 0 : 2
    }).format(price);
  };

  return {
    options,
    toggleCurrency,
    toggleBillingPeriod,
    isLoading,
    getPrice,
    exchangeRate
  };
}; 