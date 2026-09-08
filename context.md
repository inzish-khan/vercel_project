# Context

## Project Overview
This is a **Vercel project** initialized by Invowork. The repository is a clean, empty slate: application code lands exclusively via pull requests. No production logic, configuration, or source files exist in the base repository yet.

## Domain & Purpose
This is a deployment target on Vercel. The actual application domain, business logic, and feature set will be defined by incoming PR-based contributions.

## Key Points for Developers
- **Deployment platform**: Vercel (serverless, edge functions, preview deployments)
- **Code delivery mechanism**: Pull requests only—no direct commits to main expected initially
- **No existing conventions**: Stack, language, framework, and structural patterns will emerge from first PRs
- **Start fresh mindset**: Assume minimal inherited constraints or dependencies

## Gotchas & Considerations
- Vercel projects require specific manifest/config files (e.g., `vercel.json`, `package.json` for Node, `pyproject.toml` for Python) in PRs
- Environment variables and secrets must be managed via Vercel dashboard or environment configuration in PRs—not hardcoded
- Preview deployments are automatic; ensure PR-based code is production-safe
- No `.gitignore`, build output config, or environment examples yet; contributors should establish best practices early

## Current State
Empty repository. Ready for initial PR with application foundation and tooling choices.
