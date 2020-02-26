# Steps to reproduce

- `npm install`
- `npm start`
- start `Test.spec.js` using `IntelliJ-Cypress` plugin according to docs
- test runner will fail with `ENOENT` because `nyc` is incorrectly referenced
