import { Router } from "express";

import { listproduct, createProduct, updateproduct, deleteproduct } from "../services/productService.js";

const router = Router();

router.get('/list', async (req, res) => {
    try {
        const productlist = await listproducts();
        res.status(200).json(productlist);
    } catch (error) {
        res.status(500).json({ message: 'Ocorreu um erro interno no servidor.' });
        console.error('Erro:', error); 

    }
});

router.post('/create', async (req, res) => {
    try {
        const product = await createProduct(req.body);
        res.status(201).json(product);
    } catch (error) {
        console.error("Erro ao criar usuário:", error);
        if (error.code === 11000 && error.keyPattern && error.keyPattern.email) {
            res.status(400).json({ message: 'Já existe um usuário com esse EMAIL no banco!' });
        } else if (error.message.includes('required')) {
            res.status(400).json({ message: 'Informação obrigatória não foi enviada pelo formulário.' });
        } else {
            res.status(500).json({ message: 'Ocorreu um erro interno no servidor.' });
        }
    }
});

router.put('/update/:ProductId', async (req, res) => {
    const productId = req.params.productId;
    try {
        const updatedProduct = await updateProduct(productId, req.body);
        res.status(200).json(updated);
    } catch (error) {
        console.error("Erro ao atualizar usuário:", error);
        if (error.message.includes('email já está cadastrado')) {
            res.status(400).json({ message: 'Já existe um usuário com esse email no banco!' });
        } else if (error.message.includes('required')) {
            res.status(400).json({ message: 'Informação obrigatória não foi enviada pelo formulário.' });
        } else {
            res.status(500).json({ message: 'Ocorreu um erro interno no servidor.' });
        }
    }
});

router.delete('/delete/:productId', async (req, res) => {
    const productId = req.params.productId;
    try {
        await deleteProducts(productId);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: 'Ocorreu um erro interno no servidor.' });
    }
});

export default router;
