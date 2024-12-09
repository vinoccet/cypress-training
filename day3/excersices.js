// Customer object
let customers = [
    {
       'id': 1,
       'f_name': 'Abby',
       'l_name': 'Thomas',
       'gender': 'M',
       'married': true,
       'age': 32,
       'expense': 500,
       'purchased': ['Shampoo', 'Toys', 'Book']
    },
    {
       'id': 2,
       'f_name': 'Jerry',
       'l_name': 'Tom',
       'gender': 'M',
       'married': true,
       'age': 64,
       'expense': 100,
       'purchased': ['Stick', 'Blade']
    },
    {
       'id': 3,
       'f_name': 'Dianna',
       'l_name': 'Cherry',
       'gender': 'F',
       'married': true,
       'age': 22,
       'expense': 1500,
       '.purchased': ['Lipstik', 'Nail Polish', 'Bag', 'Book']
    },
    {
       'id': 4,
       'f_name': 'Dev',
       'l_name': 'Currian',
       'gender': 'M',
       'married': true,
       'age': 82,
       'expense': 90,
       'purchased': ['Book']
    },
    {
       'id': 5,
       'f_name': 'Maria',
       'l_name': 'Gomes',
       'gender': 'F',
       'married': false,
       'age': 7,
       'expense': 300,
       'purchased': ['Toys']
    }
 ];

 // Quest1) what items senior citizens have purchased >60
 
 const itemsPurchased=customers.filter(function(customer){
    if(customer.age > 60){
        return customer.purchased;
    }
 }).map(function(customer){
    return customer.purchased;
 })
 console.log(itemsPurchased);

 // check for young customer, the out put will be true of false, true if any customer found with age < 10 else it should be false
 const youngCustomer=customers.some(function(customer){
    return customer.age < 10;
 })
 console.log(youngCustomer);

// Nov 12 2024, for team to practice
 // Create an array of numbers, filter out even numbers, and then double the remaining odd numbers.
 const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 const evenNumbers = numbers.filter(function(number){
    return number % 2 === 0;
 })

 const tripExpenses = [{    amount: 12.07,    currency: 'USD',    paid: true}, 
 {    amount: 1.12,    currency: 'USD',    paid: true}, 
 {    amount: 112.00,    currency: 'INR',    paid: false}, 
 {    amount: 54.17,    currency: 'USD',    paid: true}, 
 {    amount: 16.50,    currency: 'USD',    paid: true}];
// In this example, we are calculating the total paid expenses after converting them from USD to INR.