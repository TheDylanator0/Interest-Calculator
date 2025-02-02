# Compound Interest Calculator

This is a little tool I threw together in ~15 minutes that calculates compound interest over a period of 10 years (displayed as years of month). It is very simple to use and can be used in your command terminal if you have Node.js on your machine.

## Syntax and how to use

**Format/Syntax:** `node src/index.js -p {PRINCIPAL NUMBER} -r {INTEREST RATE, NUMBER AS A PERCENTAGE} -t {TIMES INTEREST IS COMPOUNDED EACH YEAR, NUMBER} --months or --years {DISPLAY AS EACH MONTH OF YEAR UP TO 10 YEARS}`
\n
**Example:** `node src/index.js -p 1000 -r 3.80 -t 12 --years`
*This example will return the following:*
```
Year 1: 1038.67
Year 2: 1078.83
Year 3: 1120.55
Year 4: 1163.88
Year 5: 1208.89
Year 6: 1255.63
Year 7: 1304.19
Year 8: 1354.62
Year 9: 1407.00
Year 10: 1461.41
```

Any questions? Send me an email at dylan@thedylanator.com. Issues? Open an issue and I'll take a look.
