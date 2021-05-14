const Intern = require('../models/intern')


exports.getAllInterns = async (req, res) => {
    try {
        const interns = await Intern.find({})

        if (!interns) {
            return res.status(404).json({
                message: 'No intern Found!'
            })
        }

        res.status(200).json({
            message: 'Interns Successfully Retrieved!',
            data: interns
        })
    } catch (err) {
        res.status(404).json({
            message: err.message
        })
    }
}

exports.getIntern = async (req, res) => {
    try {
        const intern = await Intern.findOne({
            _id: req.params.id
        })

        if (!intern) {
            return res.status(404).json({
                message: 'Intern Not Found!'
            })
        }

        res.status(200).json({
            message: 'Intern Successfully Retrieved!',
            data: intern
        })

    } catch (err) {
        res.status(404).json({
            message: err.message
        })
    }
}

exports.createIntern = async (req, res) => {
    try {
        const newIntern = await new Intern({
          name: req.body.name,
          email: req.body.email,
          country: req.body.country
        })
  
        await newIntern.save((err, intern) => {
          if(err) return res.status(404).json({
            message: err.message,
          })

          res.status(200).json({
            message: 'Intern Successfully Created!',
            data: intern
          })
        })
  
      } catch(err){
            res.status(404).json({
                message: err.message,
            })
        }
}

exports.updateIntern = async (req, res) => {
    try{
        const intern = await Intern.findOne({
          _id: req.params.id
        })
  
        if(!intern) return res.status(404).json({
          message: "Intern Not Found!"
        })
  
        await Intern.findByIdAndUpdate({
          _id: req.params.id
        },
        {
          $set: req.body
        }
      ).exec((err, intern) => {
          if(err) return res.status(400).json({
            message: err.message,
          })
  
          res.status(200).json({
            message: "Intern Successfully Updated!",
            data: req.body
          })
        })
      } catch(err){
        res.status(404).json({
          message: err.message,
        })
    }
    
}

exports.deleteIntern = async (req, res) => {
    try{
        
        const intern = await Intern.findOne({
          _id: req.params.id
        })
  
        if(!intern) return res.status(404).json({
          message: "Intern Not Found!",
        })
  
        await Intern.findByIdAndRemove({
          _id: req.params.id
        }).exec((err, intern) => {
          if(err) return res.status(404).json({
            message: err.message,
          })
  
          res.status(200).json({
            message: "Intern Successfully Deleted!",
            data: intern
          })
        })
  
      }catch(err){
        res.status(400).json({
          message: err.message,
        })
    }
}