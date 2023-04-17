const { Router } = require('express');
const express = require('express');

const ExpenseController = require('../controllers/todo');

const router = express.Router()


router.post('/todo/add-expense',ExpenseController.postExpense)

router.get('/todo/get-expense/:id',ExpenseController.getExpense)

router.patch('/todo/edit-expense/:id',ExpenseController.editExpense)

router.delete('/todo/delete-expense/:id',ExpenseController.deleteExpense)

module.exports = router