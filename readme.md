# scraped gold

script to scrape gold (and silver) price from logammulia.com

## how 2 use

promise:

```js
scrape().then((data) => {
  // do something
  console.log(data);
});
```

async/await:

```js
const data = await scrape();
```

## return type

```ts
type ScrapedData = {
  scraped_at: Date;
  data_last_update: Date;
  gold_price: number;
  silver_price: number;
};
```
