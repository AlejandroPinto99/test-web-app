
const calculateTotal = (invoices: any) => {
    let total;
    for(let i = 0; i < invoices.length - 1 ; i++){
        total =+ invoices[i].amount;
    }

    return total;
}

export {calculateTotal}