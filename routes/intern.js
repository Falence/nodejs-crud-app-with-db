const express = require('express')
const router = express.Router()

// Controller module
const internController = require('../controllers/internController')


router.get('/interns', internController.getAllInterns)          // Get all interns
router.get('/interns/:id', internController.getIntern)          // Get an intern
router.post('/interns', internController.createIntern)          // Create a new intern
router.put('/interns/:id', internController.updateIntern)       // Update an intern
router.delete('/interns/:id', internController.deleteIntern)    // Delete an intern

module.exports = router