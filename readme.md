# scraped gold

script used to scrape gold and silver price from logammulia.com, indonesia's main source of gold and silver price. It is the backbone of [hifzonx8/autoscrap](https://github.com/hifzonx8/autoscrap)
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
