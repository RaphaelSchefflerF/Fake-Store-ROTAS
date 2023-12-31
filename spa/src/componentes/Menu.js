import { Link, useNavigate } from "react-router-dom";
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import { Button, Drawer } from 'antd';
export default function Menu() {
    const [open, setOpen] = useState(false);
    const [placement, setPlacement] = useState('right');
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    const [carrinho, setCarrinho] = useState([]);
    useEffect(() => {
        const carrinhoAtual = JSON.parse(localStorage.getItem("carrinho")) || [];
        setCarrinho(carrinhoAtual);
    }, []);
    const limparCarrinho = () => {
        localStorage.removeItem("carrinho");
        window.location.reload();
        setCarrinho([]);
    };
    const calcularTotal = () => {
        return carrinho.reduce((total, produto) => total + produto.price, 0);
    };
    return <>
        <div class="back">
            <nav class="navbar navbar-expand-lg bg-body-secondary">
                <div class="container-fluid">
                    <a class="navbar-brand" >Loja - Marisa</a>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Button type="text"><Link to="/">Home</Link></Button>
                            </li>
                            <li class="nav-item">
                                <Button type="text" onClick={showDrawer}>
                                    Carrinho
                                </Button>
                                <Drawer
                                    title="Carrinho de Compra"
                                    placement={placement}
                                    closable={false}
                                    key={placement}
                                    onClose={onClose}
                                    open={open}>
                                    {carrinho.length > 0 ? (
                                        <>
                                            <ul>
                                                {carrinho.map((produto) => (
                                                    <li key={produto.id}>
                                                        <img
                                                            src={produto.image}
                                                            alt={produto.title}
                                                            style={{ width: '30px' }
                                                            } />
                                                        {produto.title} - $ {produto.price.toFixed(2)}
                                                    </li>
                                                ))}
                                            </ul>
                                            <h2>Total: {calcularTotal().toFixed(2)}</h2>
                                        </>
                                    ) : (
                                        <p>Carrinho vazio</p>
                                    )}
                                    <Button onClick={limparCarrinho}>Limpar Carrinho</Button>
                                    <Button type="primary"><Link to='/carrinho'>Finalizar Compra</Link></Button>
                                </Drawer>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </>;
}
