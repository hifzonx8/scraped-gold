# scraped gold

script used to scrape gold and silver price from logammulia.com

## how to use

promise:

```ts
scrape().then((data) => {
  // do something
  console.log(data);
});
```

async/await:

```ts
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

## things to note

i use module instead of commonjs.
