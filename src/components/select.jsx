import React from 'react';
import Select from 'react-select';
import { SelectBox } from './styled';
import '../App.css';

function BoxSelect({options}) {
    // 부모 div에 적용될 스타일
    const containerStyle = {
        display: 'flex',
    };


    return (
        <SelectBox>
            <h1>Select Boxes</h1>
            {/* 부모 div에 적용된 스타일 */}
            <div style={containerStyle}>
                {/* 첫 번째 Select 컴포넌트 (menuPortalTarget을 body로 설정하여 부모의 가리는 스타일을 무시함) */}
                <Select options={options} className='child' menuPortalTarget={document.body} />
                {/* 두 번째 Select 컴포넌트 (menuPortalTarget을 지정하지 않아 일반적인 위치에 나타남) */}
                <Select options={options} />
            </div>
        </SelectBox>
    );
}

export default BoxSelect;
