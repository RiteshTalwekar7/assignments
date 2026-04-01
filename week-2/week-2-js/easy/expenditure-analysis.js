/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: 'Food',
    itemName: 'Pizza',
  }
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  const Category_TotalSpent = [];
  transactions.forEach((transaction) => {

    const existingCategory = Category_TotalSpent.find((obj) => {
      if (obj.category === transaction.category) {
        return true;
      } else {
        return false;
      }
    })

    if (existingCategory) {
      existingCategory.totalSpent += transaction.price;
    } else {
      Category_TotalSpent.push({
        category: transaction.category,
        totalSpent: transaction.price
      })
    }

  })
  return Category_TotalSpent;
}
// console.log(calculateTotalSpentByCategory([{
//   id: 1,
//   timestamp: 1656076800000,
//   price: 10,
//   category: 'Food',
//   itemName: 'Pizza',
// }, {
//   id: 2,
//   timestamp: 1656076800000,
//   price: 10,
//   category: 'Food',
//   itemName: 'Pizza',
// }, {
//   id: 3,
//   timestamp: 1656076800000,
//   price: 10,
//   category: 'Food',
//   itemName: 'Pizza',
// }]));
module.exports = calculateTotalSpentByCategory;

// Mistakes to avoid :- 

// const IndexForChange = Category_TotalSpent.findIndex((obj) => {
//   obj.category == transaction.category;
// })
// if (IndexForChange !== -1) {
//   Category_TotalSpent[IndexForChange].totalSpent += transaction.price;
// } else {
//   Category_TotalSpent.push({
//     category: transaction.category,
//     totalSpent: transaction.price
//   })
// }