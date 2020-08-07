const Getlicompanyname = require("../../models/li/commonscript.model.js");
console.log('controller');
// Create and Save a new commonscript
// exports.create = (req, res) => {
//     // Validate request
//     if (!req.body) {
//       res.status(400).send({
//         message: "Content can not be empty!"
//       });
//     }
// Create a commonscript
// const getlicompanyname = new Getlicompanyname({
//     email: req.body.email,
//     name: req.body.name,
//     active: req.body.active
//   })

  // Save commonscript in the database
//   commonscript.create(commonscript, (err, data) => {
//     if (err)
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while creating the commonscript."
//       });
//     else res.send(data);
//   });
// };

// Retrieve all company from the database.
exports.findAll = (req, res) => {
  Getlicompanyname.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving commonscripts."
      });
    else 
    console.log(data);
    res.send(data);
  });
};
//console.log(req.params.customerId);
// Find a single companyname with a commonscriptId
exports.findOne =  (req, res) => {
  try{
    Getlicompanyname.findById(req.params.customerId, (err, data) => {
      console.log(req.params.customerId);
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found commonscript with id ${req.params.customerId}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving commonscript with id dd " + req.params.customerId
          });
        }
      } 
      else
      {
        res.send(data);
      }
       
    });
  }
  catch (err) {
    res.status(500).json({
        message: 'Internal Server Error'
    });
}
  
};

// Update a commonscript identified by the commonscriptId in the request
// exports.update = (req, res) => {
//   // Validate Request
//   if (!req.body) {
//     res.status(400).send({
//       message: "Content can not be empty!"
//     });
//   }

//   console.log(req.body);

//   commonscript.updateById(
//     req.params.commonscriptId,
//     new commonscript(req.body),
//     (err, data) => {
//       if (err) {
//         if (err.kind === "not_found") {
//           res.status(404).send({
//             message: `Not found commonscript with id ${req.params.commonscriptId}.`
//           });
//         } else {
//           res.status(500).send({
//             message: "Error updating commonscript with id " + req.params.commonscriptId
//           });
//         }
//       } else res.send(data);
//     }
//   );
// };

// Delete a commonscript with the specified commonscriptId in the request
// exports.delete = (req, res) => {
//   commonscript.remove(req.params.commonscriptId, (err, data) => {
//     if (err) {
//       if (err.kind === "not_found") {
//         res.status(404).send({
//           message: `Not found commonscript with id ${req.params.commonscriptId}.`
//         });
//       } else {
//         res.status(500).send({
//           message: "Could not delete commonscript with id " + req.params.commonscriptId
//         });
//       }
//     } else res.send({ message: `commonscript was deleted successfully!` });
//   });
// };

// Delete all commonscripts from the database.
// exports.deleteAll = (req, res) => {
//   commonscript.removeAll((err, data) => {
//     if (err)
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while removing all commonscripts."
//       });
//     else res.send({ message: `All commonscripts were deleted successfully!` });
//   });
// };