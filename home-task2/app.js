const args = process.argv;
if (args.length < 5) {
  console.log('Invalid arguments');
  process.exit(1);
}
const operation = args[2];
const values = [];
for (let i = 3; i < args.length; i++) {
  const value = parseInt(args[i]);
  if (isNaN(value)) {
    console.log('Invalid argument: ${args[i]}');
    process.exit(1);
  }
  values.push(value);
}
switch (operation) {
  case 'addition':
    result = 0;
    let equation = "";
    for (let i = 0; i < values.length; i++) {
     result += values[i];
     equation += `${values[i]} + `;
  }
  equation = equation.slice(0, -3);
  console.log(`${equation} = ${result}`);
  break;
  case 'subtraction':
    if (values.length !== 2) {
      console.log('Subtraction takes exactly 2 values as input');
      process.exit(1);
    }
    console.log(`${values[0]} - ${values[1]} = ${values[0] - values[1]}`);
    break;
  case 'multiplication':
    result = 1;
    let equa = "";
    for (let i = 0; i < values.length; i++) {
    result *= values[i];
    equa += `${values[i]} x `;
  }
  equa = equa.slice(0, -3);
  console.log(`${equa} = ${result}`);
    break;
  case 'division':
    if (values.length !== 2) {
      console.log('Division takes exactly 2 values as input');
      process.exit(1);
    }
    if (values[1] === 0) {
      console.log('Division by zero is not allowed');
      process.exit(1);
    }
    console.log(`${values[0]} / ${values[1]} = ${values[0] / values[1]}`);
    break;
  default:
    console.log(`Unsupported operation: ${operation}`);
    process.exit(1);
}
