export const convertToCurrencyFormat = (inputString) => {
    let number = 0;
    const inputNumber = parseFloat(inputString);

    if (!isNaN(inputNumber)) {
      number = inputNumber * 1000;
    }

    const formattedNumber = new Intl.NumberFormat('en-US').format(number);

    return formattedNumber;
  };