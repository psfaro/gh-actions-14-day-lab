# Final Practical Assessment

Complete without reading the solution files.

## Part 1: Build a workflow

Create `.github/workflows/final-assessment.yml` that:

- Runs manually with a `target_environment` choice input.
- Uses `contents: read` permissions.
- Tests the Node.js application on Node.js 20 and 22.
- Builds the package only after all matrix tests succeed.
- Uploads `dist/` as an artifact for seven days.
- Exposes a job output named `version`.
- Runs a simulated deployment job using the selected environment.
- Uses a concurrency group based on the selected environment.
- Creates a job summary even if deployment fails.

## Part 2: Troubleshoot

Introduce and then fix these errors one at a time:

1. Place the workflow outside `.github/workflows`.
2. Misspell `workflow_dispatch`.
3. Reference a step output without assigning a step ID.
4. Reference a job output without `needs`.
5. Remove `issues: write` before creating an issue.
6. Use `$GITHUB_ENV` instead of `$GITHUB_OUTPUT` for a step output.
7. Request a self-hosted label that no online runner has.

## Pass criteria

- All tests pass.
- The artifact can be downloaded.
- The selected environment appears in the deployment job.
- A second deployment to the same environment is serialized.
- The job summary is visible.
- Every introduced failure is documented in `docs/mistake-log.md`.
