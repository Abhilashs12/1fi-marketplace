# 1Fi Marketplace

A frontend implementation of the 1Fi Marketplace section built as part of the 1Fi SDE Intern Assignment.

## Overview

The project extends the Shop experience with a dedicated 1Fi Marketplace where users can browse products, view product details, select variants, compare EMI plans, and proceed with a selected EMI option.

The implementation focuses only on the Marketplace experience as required by the assignment.

## Features

- Shop page with:
  - Top Brands
  - Nearby Stores
  - 1Fi Marketplace
- Marketplace product listing
- Product search
- Product images
- Product pricing and MRP
- Product variants
- Variant-dependent pricing
- EMI plan selection
- Dynamic EMI calculation based on selected product variant
- Cashback information
- Product details
- EMI review flow
- EMI confirmation/success flow
- Loading states
- Error handling
- Responsive layout

## Tech Stack

- React
- Vite
- React Router
- Tailwind CSS
- Lucide React
- JavaScript

## Data & API Approach

The assignment allows mock APIs/data when backend integration is not available.

Product and EMI information is maintained separately from the UI in:

```text
src/data/products.js