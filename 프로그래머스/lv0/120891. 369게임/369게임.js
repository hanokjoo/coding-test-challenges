function solution(order) {
    return order.toString().replace(/[^369]/g, "").length;
}