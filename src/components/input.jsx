import React, { useState } from 'react';

function Input() {
    // 이름과 가격의 내용의 상태
    const [content, setContent] = useState({ name: '', price: '' });
    const handleChange = (event) => {
        const { name, value } = event.target;
        // 이름인 경우 그대로, 가격인 경우 숫자로 변환하여 표시
        const formattedValue = name === 'price' ? Number(value.replace(/,/g, '')).toLocaleString('ko-KR') : value;
        setContent({ ...content, [name]: formattedValue });
    };
    const handleAddButtonClick = () => {
        alert(`이름: ${content.name}, 가격: ${content.price}`);
    };
    return (
        <div>
            <h1>Input</h1>
            이름
            <input name="name" value={content.name} onChange={handleChange} />
            가격 &nbsp;
            <input name="price" value={content.price} onChange={handleChange} />
            <button onClick={handleAddButtonClick}>추가</button>
        </div>
    );
}

export default Input;
