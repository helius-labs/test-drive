# Test Drive 

## Development
- `npm i`
- `npm run dev`

## Branches
| Branch | Description |
|-|-|
| `dev`  | What you should branch off of and make PRs into. |
| `main` | Any merges to dev auto merge to `master`. This makes it easy to make PRs of `main` to other deployment branches in the future.|
| `vercel/prod` | Production branch pointed at main domain (`testdrive.helius.xyz`).|

## Deployments
| Environment | Branch | Link |
|-|-|-|
| **Staging** | `dev` | [test-drive-staging.vercel.app](https://test-drive-staging.vercel.app/)
| **Production** | `vercel/prod` | [testdrive.vercel.app](https://testdrive.helius.xyz/)

## Release
To perform a release, stage + merge a PR from `main -> vercel/prod`.
