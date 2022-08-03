import React, { useState, useEffect } from 'react';
import { Button } from 'antd-mobile';
import img from './assets/react.svg'
import SlicingHoc from './components';
// 子组件
const Item: React.FC<{ id: any }> = ({ id }) => {

    return (
        <div style={{ display: 'flex', alignItems: 'center', padding: 5 }}>
            <img src={img} width={80} height={60} alt="" />列表{id}
        </div>
    )
}

const ItemHoc = SlicingHoc(Item)

const Index: React.FC<any> = (props) => {

    const [list, setList] = useState<Array<number>>([])

    useEffect(() => {
        let arr: number[] = []
        for (let i = 0; i < 50000; i++) {
            arr.push(i)
        }
        setList(arr)
    }, [])

    return (
        <div>
            <ItemHoc list={list} />
        </div>
    );
}

export default Index;