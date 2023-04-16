const { Router } = require('express');
const express = require('express');

const ExpenseController = require('../controllers/expense');

const router = express.Router()


router.post('/expense/add-expense',ExpenseController.postExpense)

router.get('/expense/get-expense',ExpenseController.getExpense)

router.patch('/expense/edit-expense/:id',ExpenseController.editExpense)

router.delete('/expense/delete-expense/:id',ExpenseController.deleteExpense)

module.exports = router