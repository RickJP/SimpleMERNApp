const QA = require('./qa.model');

module.exports = {
  list: (req, res) => {
    QA.find({})
    .exec((err, qaDetails) => {
      if (err) {
        res.status(500).json({message : err});
      }
      res.status(200).json({ message: "Getting list of questions", data: qaDetails});
    });
  },
  create: (req, res) => {
    const dummyData = new QA({question: 'What is the capital of the UK?'});
    dummyData.choices.push('A','B','C','D');

    QA.create(dummyData, (err, qaDetails) => {
      if (err) {
        res.status(500).json({message: err});
      }
      res.status(200).json({message: "Added question and options", data: qaDetails});
    })
  }
};


// create: (req, res) => {
//   Vendor.create(req.body, (err, vendorDetails) => {
//        if (err) {
//             res.status(500).json({message : err});
//        }
//        res.status(201).json({ message: "Vendor Created Successfully", data : vendorDetails});
//   });
// },