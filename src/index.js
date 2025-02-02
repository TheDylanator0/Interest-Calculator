const { program } = require('commander');

function calculateCompoundInterest(principal, rate, timesCompounded, periods) {
    return principal * Math.pow((1 + rate / timesCompounded), timesCompounded * periods);
}

program
    .version('1.0.0')
    .requiredOption('-p, --principal <number>', 'principal amount', parseFloat)
    .requiredOption('-r, --rate <number>', 'annual interest rate (APY) as a percentage (e.g., 2.5 for 2.5%)', parseFloat)
    .requiredOption('-t, --times <number>', 'number of times interest is compounded per year', parseInt)
    .option('-m, --months', 'calculate for each month up to 10 years')
    .option('-y, --years', 'calculate for each year up to 10 years')
    .action((options) => {
        let { principal, rate, times, months, years } = options;

        rate /= 100; // Convert percentage to decimal

        if (months) {
            console.log('Calculating for each month up to 10 years:');
            for (let i = 1; i <= 10 * 12; i++) {
                const t = i / 12;  // Convert months to years
                const amount = calculateCompoundInterest(principal, rate, 12, t); // Use 12 for monthly compounding
                console.log(`Month ${i}: ${amount.toFixed(2)}`);
            }
        } else if (years) {
            console.log('Calculating for each year up to 10 years:');
            for (let i = 1; i <= 10; i++) {
                const amount = calculateCompoundInterest(principal, rate, times, i);
                console.log(`Year ${i}: ${amount.toFixed(2)}`);
            }
        } else {
            console.error('Please specify either --months or --years option.');
        }
    });

program.parse(process.argv);
