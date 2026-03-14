---
slug: foundation-revamp-update
title: "Foundation Revamp: New Identity, Structured Data, and Fresh Website"
date: 2024-03-13
authors: [endi]
tags: [update, docusaurus, africa, mobile-money, open-source]
---

We have completed a major foundation revamp of the project with a clear Africa-first direction, a rebuilt TypeScript Docusaurus site, and a new structured catalogue model for integrations.

<!--truncate-->

This update is focused on making the project easier to navigate, easier to maintain, and ready for growth.

## What changed

### 1) Rebrand and positioning

The project now presents itself as an Africa-focused developer index for:

- mobile money rails
- payment service providers (PSPs)
- bank and gateway integrations
- SDKs and plugins

The core discovery model is now explicit:

`Region -> Country -> Provider -> SDK/Library`

### 2) Structured data catalogue

We introduced a machine-readable catalogue under `data/` with normalized YAML records and schema guidance. This enables future work like filtering, quality checks, and API-style exports without reworking content again.

Current catalogue sections:

- `data/mobile-money/`
- `data/psp/`
- `data/sdk/`

### 3) Website recreation (TypeScript)

The website was recreated with a fresh TypeScript Docusaurus setup, then updated with existing content and branding changes:

- migrated integration docs and blog content
- updated homepage copy and feature messaging
- customized theme via swizzle (footer wrapper)
- refreshed visual assets and logo

### 4) Visual refresh

The theme now uses a black / white / cream palette, and homepage illustrations were refreshed to keep the site visually current.

## Why this matters

This revamp sets a strong base for the next phase:

- richer provider coverage
- better contributor workflows
- automation for content quality
- eventual search and API capabilities

If you maintain an SDK or integration in this ecosystem, contributions are welcome. The easiest way to help is to add or update a YAML entry and open a pull request.
