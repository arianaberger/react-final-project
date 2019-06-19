const sortTransactions = (array) => {
  let new_array = array.sort(function (b, a) {
      return a.date.localeCompare(b.date);
    });
  return new_array
}

export default sortTransactions
