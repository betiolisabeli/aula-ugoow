import databaseConnection from '../database/databse.js';
import Product from '../models/productSchema.js';


export const listproduct = async () => {
    await databaseConnection();
    const product = await product.find();
    return product;
};


export const createProduct = async (product) => {
    await databaseConnection();

   
    // Criar o usuário no banco de dados
    const newproduct = await Product.create(product);
    return newproduct;
};


export const updateproduct = async (productId, updatedproductData) => {
    await databaseConnection();

    // Verificar se a nova senha foi fornecida
    if (updatedproductData.password) {
        // Criptografar a nova senha usando bcrypt
        updatedProductData.password = bcrypt.hashSync(updatedproductData.password, 10);
    }
    // Atualizar o usuário no banco de dados pelo ID
    const updatedproduct = awaitProductfindByIdAndUpdate(productId, updatedproductData, { new: true });
    return updatedproduct;
};


export const deleteproduct = async (productId) => {
    await databaseConnection();
    // Excluir o usuário do banco de dados pelo ID
    await productsfindByIdAndDelete(productId);
};

