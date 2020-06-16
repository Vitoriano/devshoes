import React, { Component } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { formatPrice } from '../../util/format';
import api from '../../services/api';

import { ProductList } from './styles';

export default class Home extends Component {

  state = {
    prodcuts: [],
  }

  async componentDidMount() {
    const response = await api.get('products');

    const data = response.data.map(product => ({
      ...product,
      priceFormat: formatPrice(product.price),
    }));

    this.setState({ prodcuts: data });
  }

  render() {
    const { prodcuts } = this.state;

     return (
      <ProductList>
        { prodcuts.map(prodcut => (
          <li key={ProductList.id}>
            <img src={prodcut.image} alt={prodcut.title} />
            <strong>{prodcut.title}</strong>
            <span>{prodcut.priceFormat}</span>

            <button type="button">
              <div>
                <MdAddShoppingCart size={16} color="#fff" /> 3
              </div>

              <span>ADICIONAR AO CARRINHO</span>
            </button>
          </li>
        ))}
      </ProductList>
    );
  }
}

