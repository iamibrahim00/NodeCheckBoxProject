const Expense = require('../models/Expense')

exports.postExpense = async (req,res,next) =>{
 
    try{
    const expense = req.body.expense;
    console.log(expense)
    const description = req.body.description;
    const category = req.body.category;
    const data = await Expense.create({expense :expense,description : description,
         category: category});
    res.status(201).json({newExpenseDetails : data})
    }catch(err){
        res.status(500).json({
        error : err
        })
        
    }
}

exports.getExpense = async(req,res,next)=>{
    try{
        const expense = await Expense.findAll();
        res.status(200).json({allExpense : expense})
    }catch(err){
        console.log(err)
    }
   
}

exports.editExpense = (req,res,next) =>{
    const id =req.params.id
    const updateExpense = req.body.expense
    console.log(updateExpense)
    const updatedDescription= req.body.description
    const updatedCategory = req.body.category
   Expense.findByPk(id)
   .then(expense => {
    console.log('Helloooo',expense.expense)
    expense.update(
      {
      
      expense : updateExpense,
      description : updatedDescription,
      category : updatedCategory
      }
  
    ).then((expense)=>{
      res.status(200).json({expense1 : expense})
      console.log('hiii',expense.expense)
    })
   }).catch(err => {
        return 'error: ' + err
      })
         
}

exports.deleteExpense = async(req,res,next)=>{
    try{
        const expenseId= req.params.id
        await Expense.destroy({where : {id : expenseId}});
        res.status(200).json({success : true})
    }catch(err){
        console.log(err)
    }
   
}