const data= require("../pets");

const getAllPets=(req,res)=>{
    
    res.status(200).json({pets:data})

}

const addPet = (req, res) => {
  let pets = data.map((item) => item.id);
console.log(req.body)
  let newId = pets.length > 0 ? Math.max.apply(Math, pets) + 1 : 1;

  let newPet = {
    id: newId,
    name: req.body.name,
    type: req.body.type,
    gender: req.body.type,
    age: req.body.age,
  };

  data.push(newPet);

  res.status(201).json({
    message: "Pet Added Successfully",
    data:newPet
  });
};

const updadePet=(req, res) =>{
  let found = data.find(function (item) {
      return item.id === parseInt(req.params.id);
  });
  console.log(found,req.params)
  if (found) {
      let updateData = {
          id: found.id,
          name: req.body.name,
          type: req.body.type,
          gender: req.body.gender,
          age: req.body.age,
      };

      let targetIndex = data.indexOf(found);

      data.splice(targetIndex, 1, updateData);

      res.status(201).json({ 'message': "data updated" });
  } else {
      res.status(404).json({
          'message': 'unable to insert data because data inserted not matched'
      });
  }
};
const deletePet=(req, res)=> {
  let found = data.find(function (item) {
      return item.id === parseInt(req.params.id);
  });
  if (found) {
      let targetIndex = data.indexOf(found);

      data.splice(targetIndex, 1);

      res.sendStatus(204);
  } else {
      res.sendStatus(404);
  }
};



module.exports = { getAllPets,addPet,updadePet ,deletePet};
