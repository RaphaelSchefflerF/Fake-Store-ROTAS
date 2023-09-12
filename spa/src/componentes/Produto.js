import Menu from "../componentes/Menu";
import { Link, Route, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Card } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';

const { Meta } = Card;

export default function PaginaInicial() {
    const [produtos, setProdutos] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products").then((response) => {
            setProdutos(response.data);
        });
    }, []);

    const adicionarAoCarrinho = (produto) => {
        const carrinhoAtual = JSON.parse(localStorage.getItem("carrinho")) || [];
        const novoCarrinho = [...carrinhoAtual, produto];
        window.location.reload();
        localStorage.setItem("carrinho", JSON.stringify(novoCarrinho));
        console.log(produto);
    };

    return (
        <>
            <Menu />
            <div className="container" style={{ display: 'flex', flexWrap: 'wrap' }}>
                {produtos.map((produto) => (
                    <Card
                        title={produto.title}
                        key={produto.id}
                        hoverable
                        style={{ width: 260, margin: '30px', height: '500px' }}
                        cover={<img 
                            alt="example" 
                            src={produto.image} 
                            style={{
                                width: '100%',
                                height: '300px',
                                objectFit: 'scale-down',
                                margin: 'auto' 
                            }} />}
                    >
                        <div style={{ maxHeight: '100px', margin: 'auto', textAlign: 'center' }}>
                            <Button type="text" style={{ margin: '2px' }}>
                                <Link to={`/deta/${produto.id}` }>Leia Mais</Link>
                            </Button>
                            <Button
                                type="text"
                                style={{ margin: '2px' }}
                                onClick={() => adicionarAoCarrinho(produto)}
                            >
                                Adicionar ao Carrinho
                            </Button>

                        </div>
                    </Card>
                ))}
            </div>
        </>
    );
}
