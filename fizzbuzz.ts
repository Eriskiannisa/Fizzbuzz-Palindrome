for (let i = 1; i <= 100; i++){
    let output = '';

    if (i % 3 === 0){
        output += 'Fizz';
    }

    if (i % 5 === 0){
        output += 'Buzz';
    }

    console.log(output || i);
}

class FizzBuzz {
    static generate(limit: number): string[] {
      const result: string[] = [];
      for (let i = 1; i <= limit; i++) {
        let output = '';
  
        if (i % 3 === 0) {
          output += 'Fizz';
        }
  
        if (i % 5 === 0) {
          output += 'Buzz';
        }
  
        result.push(output || i.toString());
      }
      return result;
    }
  }
  
  const fizzBuzzResult = FizzBuzz.generate(20);
  console.log('FizzBuzz Result:', fizzBuzzResult);
  