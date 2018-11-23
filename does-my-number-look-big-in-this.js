function narcissistic( value ) {
  // Code me
  return ('' + value).split('').reduce((v, i) => Math.pow(v, ('' + value).length), 0) === value;
}


console.log(narcissistic( 23603 ));