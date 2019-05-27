import scrapy


class BrickSetSpider(scrapy.Spider):
    name = "goy_spider"
    BASE_URL = 'https://dev-directory.goodonyou.eco'
    start_urls = [BASE_URL]

    def parse(self, response):
        links = response.xpath('//a[@class="hdrlnk"]/@href').extract()
        for link in links:
            absolute_url = self.BASE_URL + link
            yield scrapy.Request(absolute_url)
