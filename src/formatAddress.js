/**
 * Write a function which returns a formatter function to format address based on input address data
 * Format should be the following: 'street, house, apartment, city, postal-code, country'
 * @returns {function}
 */
module.exports.formatAddress = function formatAddress(address) {
  let formatted_addresses = address;
  for (let i = formatted_addresses.length - 1; i >= 0; i--) {
    if (formatted_addresses[i] === /"street|house|apartment|city|postalCode|country/) {
      formatted_addresses.splice(i, 1);
      return formatted_addresses;
    }
  }
};
