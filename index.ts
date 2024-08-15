import * as cheerio from "cheerio";

type ScrapedData = {
  scraped_at: Date;
  site_last_update: Date;
  gold_price: number;
  silver_price: number;
};

function parsePrice(text: string): number {
  return parseFloat(
    text
      .replace(/[^0-9.,]/g, "")
      .replace(/\./g, "")
      .replace(/,/g, ".")
  );
}

export default async function scrape(): Promise<ScrapedData> {
  const request = await fetch("https://www.logammulia.com/id");
  const html = await request.text();
  const now = new Date();

  const $ = cheerio.load(html);
  const gold_price = parsePrice(
    $(
      "body > section.index-hero > div.hero-price > div.child.child-2.has-bg.has-overlay.overlay-gold > div > p.price > span.current"
    ).text()
  );
  const silver_price = parsePrice(
    $(
      "body > section.index-hero > div.hero-price > div.child.child-3.has-bg.has-overlay.overlay-silver > div > p.price > span.current"
    ).text()
  );
  const site_last_update = new Date(
    $(
      "body > section.index-hero > div.hero-price > div.child.child-4 > div > p > span"
    )
      .text()
      .split(": ")[1]
  );
  console.log(new Date(site_last_update));
  return {
    scraped_at: now,
    site_last_update,
    gold_price,
    silver_price,
  };
}
async function main() {
  console.log(await scrape());
}

main();
