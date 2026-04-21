/*
npx playwright test --ui
npx playwright test example.spec.js:12  -- runs the test at line 12 in example.spec.js
npx playwright test --grep @smoke  -- runs all the tests with @smoke tag
npx playwright test --grep @smoke --grep-invert @regression  -- runs all the tests with @smoke tag but not with @regression tag 
npx playwright test vijayaTest/
npx playwright test --project=chromium
npx playwright test vijayaTest/ --project=chromium

npx playwright show-report

npx playwright test --headed
npx playwright test vijayaTest/ --project=chromium --headed
npx playwright test vijayaTest/ --project=chromium --headed --config=playwright.config.js --reporter=json
*/