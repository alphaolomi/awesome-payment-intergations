# Awesome African Payment Integrations

A curated index of African payment providers, mobile money APIs, and integration libraries.

This repository is organized for regional discovery:

`Region -> Country -> Provider -> SDKs/Libraries`

## East Africa

### Tanzania

#### AzamPay
- SDK (Go) - [elirehema/azampay](https://github.com/elirehema/azampay) (`community`)

#### M-Pesa (Vodacom)
- SDK (PHP) - [openpesa/php-pesa](https://github.com/openpesa/php-pesa) (`community`)
- SDK (Laravel) - [openpesa/laravel-pesa](https://github.com/openpesa/laravel-pesa) (`community`)
- Push/USSD (Laravel) - [tumainimosha/laravel-mpesa-push](https://github.com/tumainimosha/laravel-mpesa-push) (`community`)
- SDK Docs (Python) - [python-pesa](https://kalebu.github.io/python-pesa/) (`community`)

#### Tigo Pesa
- Push/USSD (Laravel) - [tumainimosha/laravel-tigopesa-push](https://github.com/tumainimosha/laravel-tigopesa-push) (`community`)
- SDK (Python) - [Kalebu/tigopesa](https://github.com/Kalebu/tigopesa) (`community`)
- Plugin (WHMCS) - [devmedtz/whmcs-tigopesa](https://github.com/devmedtz/whmcs-tigopesa) (`community`)

#### Selcom
- SDK (Laravel) - [bryceandy/laravel-selcom](https://github.com/bryceandy/laravel-selcom) (`community`)

#### NMB Bank
- SDK (Django/Python) - [devmedtz/django-nmb](https://github.com/devmedtz/django-nmb) (`community`)

#### Utility
- Mobile number assignment (Tanzania) - [techcraftlabs/mna](https://github.com/techcraftlabs/mna) (`community`)

### Regional / Pan-African

#### DPO Group
- SDK (PHP) - [Zepson-Technologies/dpo-php](https://github.com/Zepson-Technologies/dpo-php) (`community`)
- SDK (Laravel) - [Zepson-Technologies/dpo-laravel](https://github.com/Zepson-Technologies/dpo-laravel) (`community`)

#### Sanwo
- Universal SDK (TypeScript/JS) - [Sanwohq/core](https://github.com/Sanwohq/core) (`community`)
- SDK (React) - [@sanwohq/react](https://www.npmjs.com/package/@sanwohq/react) (`community`)
- SDK (Vue) - [@sanwohq/vue](https://www.npmjs.com/package/@sanwohq/vue) (`community`)
- SDK (Svelte) - [@sanwohq/svelte](https://www.npmjs.com/package/@sanwohq/svelte) (`community`)
- SDK (React Native) - [Sanwohq/react-native](https://github.com/Sanwohq/react-native) (`community`)
- SDK (Flutter) - [Sanwohq/flutter](https://github.com/Sanwohq/flutter) (`community`)
- SDK (iOS/Swift) - [Sanwohq/ios](https://github.com/Sanwohq/ios) (`community`)
- SDK (Android/Kotlin) - [Sanwohq/android](https://github.com/Sanwohq/android) (`community`)
- Plugin (Shopify) - [Sanwohq/shopify](https://github.com/Sanwohq/shopify) (`community`)
- Plugin (WordPress) - [Sanwohq/wordpress](https://github.com/Sanwohq/wordpress) (`community`)

## Maintainer Labels

- `official`: Maintained by the payment provider or vendor organization.
- `community`: Maintained by external open-source contributors.

## Structured Data Catalogue

Machine-readable records live under the `data/` directory:

- `data/mobile-money/`
- `data/psp/`
- `data/sdk/`

Use the schema documented in `data/SCHEMA.md` for all new records.

## Contributing

To add a new provider or SDK, submit a PR that:

1. Adds or updates YAML entries in `data/`.
2. Links the integration in the appropriate regional section above.
3. Marks the entry as `official` or `community`.
