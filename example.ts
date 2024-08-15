import scrape from ".";

// promise
scrape().then((data) => {
  // do something
  console.log(data);
});

// async/await
(async () => {
  const data = await scrape();

  // do something
  console.log(data);
})();
