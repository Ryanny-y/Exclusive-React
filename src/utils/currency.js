export const getDiscountedPrice = (price, discount) => (price - (price * discount)).toFixed(0);

export const formatCurrency = (price) => price.toFixed(2);