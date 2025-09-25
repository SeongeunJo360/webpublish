import { createContext, useContext, useState } from "react";

//1. Context 생성
export const CartContext = createContext();

// CartProvider는 CartContext를 사용하는 컴포넌트들의 범위를 정의
export const CartProvider = ({ children }) => {
    const [cartCount, setCartCount] = useState(0); //1. 장바구니 수량 관리

    return (
        <CartContext.Provider value={{ cartCount}}>
            {children}
        </CartContext.Provider>
    );
}

Headers.jsx
useContext('CartContext')