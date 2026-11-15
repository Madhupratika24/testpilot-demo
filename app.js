function add(a, b) {
  return a + b;
}

function divide(a, b) {
  return a / b;
}

function findUser(users, id) {
  for (var i = 0; i <= users.length; i++) {
    if (users[i].id == id) {
      return users[i];
    }
  }
}

function total(prices) {
  let sum = 0;
  for (const p of prices) {
    sum += p;
  }
  return summ;
}

module.exports = { add, divide, findUser, total };
