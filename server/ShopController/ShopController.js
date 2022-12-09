import ShopModel from "../ShopModel/ShopModel.js";

export const getProducts = async (req, res) => {
    try {
        const response = await ShopModel.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
};

export const getProductById = async (req, res) =>{
    try {
        const response = await ShopModel.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
};

export const createProduct = async (req, res) =>{
    console.log(req.body);
    try {
        await ShopModel.create(req.body);
        res.status(201).json({msg: "User Created"});
    } catch (error) {
        console.log(error.message);
    }
};

export const updateProduct = async (req, res) =>{
    try {
        await ShopModel.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "User Updated"});
    } catch (error) {
        console.log(error.message);
    }
};

export const deleteProduct = async (req, res) =>{
    try {
        await ShopModel.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "User Deleted"});
    } catch (error) {
        console.log(error.message);
    }
};