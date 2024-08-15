type ScrapedData = {
    scraped_at: Date;
    site_last_update: Date;
    gold_price: number;
    silver_price: number;
};
export default function scrape(): Promise<ScrapedData>;
export {};
