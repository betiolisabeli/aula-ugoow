import databaseConnection from '../database/databse.js';
import Products from '../models/userSchema.js';


export const listProducts = async () => {
    await databaseConnection();
    const Products = await Products.find();
    return Products;
};


export const createProducts = async (Products) => {
    await databaseConnection();

    const hashedPassword = bcrypt.hashSync(Products.password, 10);
    Products.password = hashedPassword;

    // Criar o usuário no banco de dados
    const newProducts = await Products.create(Products);
    return newProducts;
};


export const updateProducts = async (ProductsId, updatedProductsData) => {
    await databaseConnection();

    // Verificar se a nova senha foi fornecida
    if (updatedProductsData.password) {
        // Criptografar a nova senha usando bcrypt
        updatedProductsData.password = bcrypt.hashSync(updatedProductsData.password, 10);
    }

    // Verificar se o Email foi atualizado e se já existe um usuário com o mesmo email
    if (updatedUserData.email) {
        const existingUserWithemail = await Products.findOne({ email: updatedProductsData.email });
        if (existingUserWithemail && existingUserWithemail._id.toString() !== ProductsId) {
            throw new Error("Este email já está cadastrado.");
        }
    }

    // Atualizar o usuário no banco de dados pelo ID
    const updatedUser = await User.findByIdAndUpdate(ProductsId, updatedUserData, { new: true });
    return updatedProducts;
};


export const deleteUser = async (userId) => {
    await databaseConnection();
    // Excluir o usuário do banco de dados pelo ID
    await User.findByIdAndDelete(userId);
};

