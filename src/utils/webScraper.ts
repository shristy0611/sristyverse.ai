import axios from 'axios';
import * as cheerio from 'cheerio';

interface ScrapingConfig {
  url: string;
  selector: string;
  attribute?: string;
  transform?: (value: string) => any;
}

export class WebScraper {
  private static instance: WebScraper;
  private cache: Map<string, { data: any; timestamp: number }>;
  private cacheTimeout: number = 5 * 60 * 1000; // 5 minutes

  private constructor() {
    this.cache = new Map();
  }

  public static getInstance(): WebScraper {
    if (!WebScraper.instance) {
      WebScraper.instance = new WebScraper();
    }
    return WebScraper.instance;
  }

  private isCacheValid(key: string): boolean {
    const cached = this.cache.get(key);
    if (!cached) return false;
    return Date.now() - cached.timestamp < this.cacheTimeout;
  }

  public async scrape<T>({ url, selector, attribute, transform }: ScrapingConfig): Promise<T> {
    const cacheKey = `${url}-${selector}-${attribute}`;

    if (this.isCacheValid(cacheKey)) {
      return this.cache.get(cacheKey)!.data;
    }

    try {
      const response = await axios.get(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (compatible; SristyverseBot/1.0; +https://sristyverse.ai)',
          'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
          'Accept-Language': 'en-US,en;q=0.5',
        }
      });

      const $ = cheerio.load(response.data);
      let result = attribute ? $(selector).attr(attribute) : $(selector).text().trim();

      if (!result) {
        throw new Error(`No data found for selector: ${selector}`);
      }

      if (transform) {
        result = transform(result);
      }

      this.cache.set(cacheKey, {
        data: result,
        timestamp: Date.now()
      });

      return result as T;
    } catch (error) {
      console.error('Scraping failed:', error);
      throw new Error('Failed to fetch data');
    }
  }
}

export const scraper = WebScraper.getInstance(); 