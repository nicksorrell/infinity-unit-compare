const n3Functions = {
    processN3Array: function(arrayString) {
        let n3Array = arrayString.replaceAll('(|', 'e').replaceAll('|)', '');
        n3Array = n3Array.substring(1, n3Array.length - 1).split('|');

        return n3Array;
    },

    processN3Orders: function (orderString) {
        const orderList = [];
        const orders = orderString.split('%');

        if (orders[0] === "1") {
            orderList.push({
                list: 1,
                total: 1,
                type: "REGULAR"
            });
        }

        if (orders[1] === "1") {
            orderList.push({
                list: 1,
                total: 1,
                type: "IRREGULAR"
            });
        }

        if(orders[2] === "1") {
            orderList.push({
                list: 1,
                total: 1,
                type: "IMPETUOUS"
            });
        }

        return orderList;
    }
}

export default n3Functions;