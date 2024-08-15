type ScrapedData = {
    scraped_at: Date;
    data_last_update: Date;
    gold_price: number;
    silver_price: number;
};
export default function scrape(): Promise<ScrapedData>;
export {};
