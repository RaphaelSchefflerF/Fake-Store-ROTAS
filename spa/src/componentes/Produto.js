import Menu from "../componentes/Menu";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Card } from 'antd';
/* Criando o produto */
export default function Produto() {
    /* Criando o estado */
    const [produtos, setProdutos] = useState([]);
    /* Criando o efeito */
    useEffect(() => {
        axios.get("https://fakestoreapi.com/products").then((response) => {
            setProdutos(response.data);
        });
    }, []);
    /* Criando a função  que adiciona item ao carrinho */
    const adicionarAoCarrinho = (produto) => {
        const carrinhoAtual = JSON.parse(localStorage.getItem("carrinho")) || [];
        const novoCarrinho = [...carrinhoAtual, produto];
        window.location.reload();
        localStorage.setItem("carrinho", JSON.stringify(novoCarrinho));
        console.log(produto);
    };
    /* Criando o retorno */
    return (
        <>
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
                            <Button  style={{ margin: '2px' }}>
                                <Link to={`/deta/${produto.id}` }>Leia Mais</Link>
                            </Button>
                            <Button
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
