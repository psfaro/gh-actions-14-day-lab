# GH-200 GitHub Actions: Complete 14-Day Lab

This repository is a practical training environment for GitHub Actions and GH-200-style scenarios. Each day contains:

- A focused objective
- A runnable workflow
- Exercises to modify or extend the workflow
- Verification criteria
- Troubleshooting prompts
- A solution reference

## Prerequisites

Install or prepare:

1. A GitHub account and a test repository.
2. Git 2.40 or later.
3. GitHub CLI (`gh`) and authentication with `gh auth login`.
4. Node.js 22 or later for local tests.
5. Visual Studio Code with the **GitHub Actions** and **YAML** extensions.

## Import the lab

```bash
git init
git add .
git commit -m "Add GH-200 14-day lab"
git branch -M main
git remote add origin https://github.com/YOUR-ACCOUNT/gh-actions-14-day-lab.git
git push -u origin main
```

Replace `YOUR-ACCOUNT` with your GitHub account or organization.

## Safe execution model

- Most workflows use `workflow_dispatch`, so they run only when manually started.
- The issue-creation lab requires `issues: write` and creates a clearly labeled test issue.
- The deployment labs echo a simulated deployment command. They do not deploy real infrastructure.
- The release lab creates a draft release only.
- The self-hosted runner lab is disabled until you add the required runner labels.

## Daily method

For each day:

1. Read `exercises/day-XX.md`.
2. Open the associated workflow in `.github/workflows`.
3. Predict the result before running it.
4. Run the workflow and inspect every job and step.
5. Make the requested changes.
6. Compare with `solutions/day-XX-solution.md` only after attempting the tasks.
7. Record mistakes in `docs/mistake-log.md`.

## Workflow map

- Day 1: Workflow structure
- Day 2: Triggers and inputs
- Day 3: Variables and contexts
- Day 4: Secrets, permissions, and `GITHUB_TOKEN`
- Day 5: Step and job outputs
- Day 6: Conditions and expressions
- Day 7: Artifacts and caching
- Day 8: Matrix strategies
- Day 9: Runners and labels
- Day 10: Containers and service containers
- Day 11: Environments and concurrency
- Day 12: GitHub CLI and REST API
- Day 13: Reusable workflows and composite actions
- Day 14: Debugging and final assessment

## Local application used by the workflows

```bash
npm ci
npm test
npm run build
```

The build creates `dist/app.txt`, which is used by artifact and release exercises.
