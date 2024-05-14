const express=require("express")
const router=express.Router()
const petController=require("../controllers/Pet-Controller")

router.get("/",petController.getAllPets)
router.post("/addPet",petController.addPet)
router.put("/:id",petController.updadePet)
router.delete("/:id",petController.deletePet)
module.exports=router