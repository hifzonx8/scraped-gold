"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = scrape;
const cheerio = require("cheerio");
function parsePrice(text) {
    return parseFloat(text
        .replace(/[^0-9.,]/g, "")
        .replace(/\./g, "")
        .replace(/,/g, "."));
}
function scrape() {
    return __awaiter(this, void 0, void 0, function* () {
        const request = yield fetch("https://www.logammulia.com/id");
        const html = yield request.text();
        const now = new Date();
        const $ = cheerio.load(html);
        const gold_price = parsePrice($("body > section.index-hero > div.hero-price > div.child.child-2.has-bg.has-overlay.overlay-gold > div > p.price > span.current").text());
        const silver_price = parsePrice($("body > section.index-hero > div.hero-price > div.child.child-3.has-bg.has-overlay.overlay-silver > div > p.price > span.current").text());
        const data_last_update = new Date($("body > section.index-hero > div.hero-price > div.child.child-4 > div > p > span")
            .text()
            .split(": ")[1]);
        return {
            scraped_at: now,
            data_last_update,
            gold_price,
            silver_price,
        };
    });
}
