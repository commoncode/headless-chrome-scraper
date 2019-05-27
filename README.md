# hc-scraper (Headless Chrome Scraper)

Web scraping docker image, suitable for scheduled deployments on e.g. AWS ECS Fargate

Based on: https://github.com/yujiosaka/headless-chrome-crawler

Update .env with your starting domain.  Customise index.js as needed.

```
# Execute with docker locally
docker build -t hc-scraper .
docker run --env-file .env hc-scraper
```
