# Test Drive 

### Develop
- `npm i`
- `npm run dev`

### Dev Flow + CI/CD
- Branch off the `dev` branch.
- Make PRs back into the `dev` branch. 
- Whenever things are merged to `dev`, this triggers a github action that auto merges whatever is in `dev` to `main`.
- The `testdrive.helius.xyz` domain points to the `vercel/prod` branch. So to perform a `prod` release, setup a PR and merge `main -> vercel/prod`. 
