import React from 'react'
import { Button, Table } from 'react-bootstrap';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { useDeleteProductMutation } from '../services/appApi';
import './DashboardProduct.css';

function DashboardProducts() {
    const products = useSelector(state=> state.products);
    const user = useSelector(state=> state.user);
    const [deleteProduct, {isLoading, isSuccess}] = useDeleteProductMutation();


    function handleDeleteProduct(id){
        if (window.confirm("Are you sure?")) deleteProduct({ product_id: id, user_id: user._id});
    }
  return (
    <Table striped bordered hover responsive>
        <thead>
            <tr>
                <th></th>
                <th>Product ID</th>
                <th>Product Name</th>
                <th>Product Price</th>
            </tr>
        </thead>
        <tbody>
            {products.map((product)=> (
                <tr>
                    <td>
                        <img src={product.pictures[0].url} className="dashboard-product-preview"/>
                    </td>
                    <td>{product._id}</td>
                    <td>{product.name}</td>
                    <td>₹{product.price}</td>
                    <td>
                        <Button onClick={()=> handleDeleteProduct(product._id, user._id)} disabled={isLoading}>Delete</Button>
                    </td>
                    <Link to={`/product/${product._id}/edit`}>
                        <Button className="edit-btn">Edit</Button>
                        
                    </Link>
                </tr>
            ))}
        </tbody>

    </Table>
  )
}

export default DashboardProducts