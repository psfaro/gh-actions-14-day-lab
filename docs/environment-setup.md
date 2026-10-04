# Repository Configuration Checklist

Complete these settings after pushing the repository.

## Repository variable

Create `LAB_MESSAGE` with value `Configured at repository level` under:

`Settings > Secrets and variables > Actions > Variables`

## Repository secret

Create `LAB_SECRET` with a harmless test value under:

`Settings > Secrets and variables > Actions > Secrets`

Do not use a real password or production credential.

## Environments

Create these environments under `Settings > Environments`:

- `test`
- `production`

For `production`, optionally configure a required reviewer if supported by your repository plan.

## Optional self-hosted runner

Only for Day 9, register a disposable test runner and assign these labels:

- `self-hosted`
- `linux`
- `gh200-lab`

Do not run untrusted pull-request code on a persistent self-hosted runner.
