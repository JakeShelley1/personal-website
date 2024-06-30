#!/bin/bash

BUILD_DIR="out" # Output directory for the Next.js build
S3_BUCKET="www.jacobshelley.com"
CLOUNDFRONT_DISTRIBUTION_ID="E3TMA90BL0IWMX"

# Step 1: Build the Next.js website
echo "Building Next.js website..."
yarn build

# Step 2: Sync build output to S3 bucket
echo "Syncing build output to S3 bucket..."
aws s3 sync $BUILD_DIR s3://$S3_BUCKET --delete

# Step 3: Invalidate CloudFront cache (optional, if using CloudFront)
echo "Invalidating CloudFront cache..."
aws cloudfront create-invalidation --distribution-id $CLOUNDFRONT_DISTRIBUTION_ID --paths "/*"

echo "Website deployed successfully!"