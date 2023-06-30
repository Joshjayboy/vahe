import React, {useState} from 'react';
import Modal from 'react-modal';

const ProductItem = ({product}) => {
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <div className="product-item">
            <div className="inside" type="button" onClick={openModal}>
                <div className="shopBack">
                    {product.imageUrl && <img src={product.imageUrl} alt={product.name} height="256px" width="256px"/>}
                </div>
                <div className="shoptext">
                    <div className="divtext text-center">
                        <h3 className="food_text">{product.name}</h3>
                    </div>
                    <div className="pricart">
                        <div className="price">
                            <div className="price2">
                                <span className="rprice">{product.price}</span>
                                <span className="mprice">AMD</span>
                            </div>
                        </div>
                        <div className="cart">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path fill="#ea1f4d" d="M0 0h24v24H0z" fillOpacity=".1"/>
                                <path fill="#ea1f4d"
                                      d="M20 7h-2V5h-2V3H4v2H2v2h2v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9h2V7zm-2-2V4H4v1h14zM6 20a1 1 0 0 1-1-1V9h2v10h10V9h2v10a1 1 0 0 1-1 1H6z"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <Modal isOpen={modalOpen} onRequestClose={closeModal}>
                <button className="modal-close" onClick={closeModal}>
                    X
                </button>
                <h2>{product.name}</h2>
                {product.imageUrl && <img src={product.imageUrl} alt={product.name} height="500px" width="500px"/>}
                <p>{product.description}</p>
            </Modal>
        </div>
    );
};

export default ProductItem;
