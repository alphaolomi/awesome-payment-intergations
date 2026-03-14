# YAML Schema (Normalized)

All records under `data/` should use this structure.

```yaml
id: string
entity_type: provider | sdk
category: mobile-money | psp | bank-api | plugin | utility | sdk
name: string
provider: string | null
region: string
countries:
  - string
languages:
  - string
integration_types:
  - API | SDK | Hosted Checkout | Push USSD | Plugin | Utility
maintainer_type: official | community | unknown
repo_url: string | null
docs_url: string | null
website_url: string | null
status: active | unknown
notes: string
tags:
  - string
```

## Required fields

- `id`
- `entity_type`
- `category`
- `name`
- `region`
- `countries`
- `languages`
- `integration_types`
- `maintainer_type`
- `status`

## Notes

- `provider` is required for SDK records and should point to the platform name.
- Use `null` when a URL is not available.
- Keep `tags` short and searchable (e.g., `laravel`, `tanzania`, `mpesa`).
