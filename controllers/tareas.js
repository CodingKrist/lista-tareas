const Tareas = require('../models/Tareas')

module.exports = {
    getTareas: async (req,res)=>{
        //console.log(req.user)
        try{
            const todasTareas = await Tareas.find()
            const tareaIncompleta = await Tareas.countDocuments({completa: false})
            res.render('listatareas.ejs', {tareas: todasTareas, incompletas: tareaIncompleta})
        }catch(err){
            console.log(err)
        }
    },
    crearTarea: async (req, res)=>{
        try{
            await Tareas.create({tarea: req.body.tareaNueva, completa: false})
            console.log('Tarea añadida')
            res.redirect('/listatareas')
        }catch(err){
            console.log(err)
        }
    },
    // markComplete: async (req, res)=>{
    //     try{
    //         await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
    //             completed: true
    //         })
    //         console.log('Marked Complete')
    //         res.json('Marked Complete')
    //     }catch(err){
    //         console.log(err)
    //     }
    // },
    // markIncomplete: async (req, res)=>{
    //     try{
    //         await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
    //             completed: false
    //         })
    //         console.log('Marked Incomplete')
    //         res.json('Marked Incomplete')
    //     }catch(err){
    //         console.log(err)
    //     }
    // },
    // deleteTodo: async (req, res)=>{
    //     console.log(req.body.todoIdFromJSFile)
    //     try{
    //         await Todo.findOneAndDelete({_id:req.body.todoIdFromJSFile})
    //         console.log('Deleted Todo')
    //         res.json('Deleted It')
    //     }catch(err){
    //         console.log(err)
    //     }
    // }
}    
