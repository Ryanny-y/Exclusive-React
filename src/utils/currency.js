export const getDiscountedPrice = (price, discount) => (price - (price * (discount / 100))).toFixed(0);

export const formatCurrency = (price) => price.toFixed(2);