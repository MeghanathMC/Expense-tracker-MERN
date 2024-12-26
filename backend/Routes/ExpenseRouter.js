const express=require('express');
const { fetchExpenses, addExpenses, deleteExpenses } = require('../Controllers/ExpenseController');
const router=express.Router();

router.get('/', fetchExpenses);

router.post('/',addExpenses);

router.delete("/:expenseId",deleteExpenses);


module.exports=router;