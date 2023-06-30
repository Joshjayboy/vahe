import React, { useState } from 'react';
import { Button, Grid, TextField, Typography } from '@material-ui/core';
import { BACKEND_BASE_URL } from '../Constants/AppConstants';
import { useNavigate } from 'react-router-dom';

export const HandleImageUpdate = () => {
};

function CreateProduct() {
  const [isProductCreated, setProductCreated] = useState(false);
  const [imageFile, setFile] = useState(null);
  const [productId, setProductId] = useState(null);

  const navigate = useNavigate();
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    productStatus: '',
    productDetails: [{ id: '', cookingTime: '' }],
    ingredients: [{ id: '', name: '', description: '' }],
  });

  const handleInputChange = (e, index, section) => {
    const { name, value } = e.target;
    const list = [...product[section]];
    list[index][name] = value;
    setProduct(prevState => ({ ...prevState, [section]: list }));
  };

  const handleRemoveClick = (index, section) => {
    const list = [...product[section]];
    list.splice(index, 1);
    setProduct(prevState => ({ ...prevState, [section]: list }));
  };

  const handleAddClick = section => {
    setProduct(prevState => ({
      ...prevState,
      [section]: [...product[section], { id: '', name: '', description: '' }],
    }));
  };

  const handleProductChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };
  const handleImageSubmit = async () => {
    if (imageFile) {
      const formData = new FormData();
      formData.append('file', imageFile);
      const imageResponse = await fetch(`${BACKEND_BASE_URL}/products/${productId}/add-image`, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`,
        },
        body: formData,
      });
      if (imageResponse.status === 200) {
        console.log(`Image added successfully to product ${productId}`);
        navigate('/');
      } else {
        console.log('Image upload failed');
      }
    }
  };


  const handleSubmit = async (event) => {
    const config = {
      headers: {},
    };
    event.preventDefault();
    console.log(product);
    const response = await fetch(`${BACKEND_BASE_URL}/products`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    });
    if (response.status === 201) {
      const data = await response.json();
      console.log(`Created product ${data}`);
      setProductCreated(true);
      setProductId(data.id);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant='h6'>Create a Product</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField required name='name' label='Name' fullWidth onChange={handleProductChange} />
          <TextField required name='description' label='Description' fullWidth
                     onChange={handleProductChange} />
          <TextField required name='price' label='Price' fullWidth onChange={handleProductChange} />
          <TextField required name='productStatus' label='Product Status' fullWidth
                     onChange={handleProductChange} />
        </Grid>
        {product.productDetails.map((x, i) => {
          return (
            <Grid item xs={12}>
              <h3>Product Details</h3>
              <TextField name='cookingTime' label='Cooking Time' value={x.cookingTime}
                         onChange={e => handleInputChange(e, i, 'productDetails')} />
              {product.productDetails.length !== 1 && <Button variant='contained' color='secondary'
                                                              onClick={() => handleRemoveClick(i, 'productDetails')}>Remove</Button>}
              {product.productDetails.length - 1 === i && <Button variant='contained' color='primary'
                                                                  onClick={() => handleAddClick('productDetails')}>Add</Button>}
            </Grid>
          );
        })}
        {product.ingredients.map((x, i) => {
          return (
            <Grid item xs={12}>
              <h3>Ingredients</h3>
              <TextField name='name' label='Name' value={x.name}
                         onChange={e => handleInputChange(e, i, 'ingredients')} />
              <TextField name='description' label='Description' value={x.description}
                         onChange={e => handleInputChange(e, i, 'ingredients')} />
              {product.ingredients.length !== 1 && <Button variant='contained' color='secondary'
                                                           onClick={() => handleRemoveClick(i, 'ingredients')}>Remove</Button>}
              {product.ingredients.length - 1 === i && <Button variant='contained' color='primary'
                                                               onClick={() => handleAddClick('ingredients')}>Add</Button>}
            </Grid>
          );
        })}
        <Grid item xs={12}>
          <Button type='submit' variant='contained' color='primary'>Submit</Button>
        </Grid>
        {isProductCreated && (
          <Grid item xs={12}>
            <input type='file' onChange={(e) => setFile(e.target.files[0])} />
            <Button variant='contained' color='primary' onClick={handleImageSubmit}>Upload Image</Button>
          </Grid>
        )}
      </Grid>
    </form>
  );
}

export default CreateProduct;
