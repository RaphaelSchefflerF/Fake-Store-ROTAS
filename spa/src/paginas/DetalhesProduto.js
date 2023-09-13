import React, { useEffect, useState } from 'react';
import {  useParams } from 'react-router-dom';
import axios from 'axios';
import Menu from '../componentes/Menu';
import { useNavigate } from "react-router-dom";
import { Button, Image, Col, Row, Card } from 'antd';
import './style.css';
function DetalhesProduto() {
    const { id } = useParams();
    const [produto, setProduto] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`).then((response) => {
            setProduto(response.data);
        });
    }, [id]);

    const adicionarAoCarrinho = (produto) => {
        const carrinhoAtual = JSON.parse(localStorage.getItem("carrinho")) || [];
        const novoCarrinho = [...carrinhoAtual, produto];
        localStorage.setItem("carrinho", JSON.stringify(novoCarrinho));
        navigate('/carrinho');
    };

    if (!produto) {
        return <div>Carregando...</div>;
    }

    return (
        <>
            <Menu />
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
                <Card
                    hoverable
                    style={{ width: 800, margin: '30px', height: '550px' }}
                >
                    <Row>
                        <Col span={12} >
                            <h2>{produto.title}</h2>
                            <Image src={produto.image} width={300} style={{
                                width: '100%',
                                height: '340px',
                                objectFit: 'scale-down',
                                margin: 'auto'
                            }} content='center' />
                        </Col>
                        <Col span={12} >
                            <h2>Descrição</h2>
                            <p>{produto.description}</p>
                            <h3>Preço: ${produto.price}</h3>
                            <Button
                                style={{ margin: '2px' }}
                                onClick={() => adicionarAoCarrinho(produto)}
                            >
                                Comprar
                            </Button>
                        </Col>
                    </Row>
                </Card>
            </div>
        </>
    );
}

export default DetalhesProduto;
