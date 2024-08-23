type ScrapedSellData = {
    scraped_at: Date;
    data_last_update: Date;
    gold_price: number;
    silver_price: number;
};
type ScrapedBuybackData = {
    scraped_at: Date;
    data_last_update: Date;
    gold_price: number;
};
export declare function scrape_sell_price(): Promise<ScrapedSellData>;
export declare function scrape_buyback_price(): Promise<ScrapedBuybackData>;
export {};
