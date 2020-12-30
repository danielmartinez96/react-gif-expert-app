import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length>2){
            setCategories(cat => [inputValue,...cat]);
            setInputValue('');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />  
            {/* <button onClick={handleAdd}>Agregar</button> */}
        </form>
    )
}

export default AddCategory;


AddCategory.propTypes={
    setCategories: PropTypes.func.isRequired
};