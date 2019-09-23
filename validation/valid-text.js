const validText = str => {
  return typeof str === 'string' && str.trim().length > 0;
}

// just check that it is a string

module.exports = validText;