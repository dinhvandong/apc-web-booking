export const convertToCurrencyFormat = (inputString) => {
    let number = 0;
    const inputNumber = parseFloat(inputString);

    if (!isNaN(inputNumber)) {
      number = inputNumber * 1000;
    }

    const formattedNumber = new Intl.NumberFormat('en-US').format(number);

    return formattedNumber;
  };


  export function formatDateTime(datetimeString) {
    // Convert datetime string to Date object
    const date = new Date(
      datetimeString.substring(0, 4), // Year
      parseInt(datetimeString.substring(4, 6)) - 1, // Month (zero-based)
      datetimeString.substring(6, 8) // Day
    );
  
    // Format the date as "YYYY/MM/DD"
    const formattedDate = `${date.getFullYear()}/${(date.getMonth() + 1)
      .toString()
      .padStart(2, '0')}/${date.getDate().toString().padStart(2, '0')}`;
  
    return formattedDate;
  }