# e.g. usage
# ./deploy.sh ap-southeast-2 0412345678900
aws_region=$1
aws_account_id=$2
$(aws ecr get-login --no-include-email --region $aws_region)
docker build -t hc-scraper .
docker tag hc-scraper:latest $aws_account_id.dkr.ecr.$aws_region.amazonaws.com/hc-scraper:latest
docker push $aws_account_id.dkr.ecr.$aws_region.amazonaws.com/hc-scraper:latest
