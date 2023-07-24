import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import OrderListItem from './OrderListItem';

const OrderInfo = memo(() => {
    const { orderList } = useSelector(state => state.goodsR);
    const deliveryCost = 3000;
    const orderCost = orderList.reduce((accumulator, currentItem) => {
        return accumulator + (currentItem.price * currentItem.amount) - (currentItem.price * currentItem.amount) * currentItem.discount * 0.01;
    }, 0);
    const totalPrice = orderList.length * deliveryCost + orderCost
    return (
        <>
            <div className='cartInfo'>
                <div className="cartTop">
                    <span>주문내역 {orderList.length}개</span>
                </div>
                {
                    orderList.length === 0 &&
                    <div style={{ height: "100px", padding: "20px", lineHeight: '100px', fontSize: "20px" }}>
                        <span>주문내역이 존재하지 않습니다.</span>
                    </div>
                }
                {
                    orderList.map((item, index) => (
                        <OrderListItem item={item} key={index} index={index} />)
                    )
                }
            </div>
            <div className='cost'>
                <div>
                    <span>총 주문금액</span>
                    <span>{orderCost.toLocaleString("kr-KR")}원</span>
                </div>
                <div>
                    <span>배송비</span>
                    <span>{(deliveryCost * orderList.length).toLocaleString("kr-KR")}원</span>
                </div>
                <div>
                    <span>총 결제금액</span>
                    <span>{totalPrice.toLocaleString("kr-KR")}원</span>
                </div>
            </div>
        </>
    );
});

export default OrderInfo;