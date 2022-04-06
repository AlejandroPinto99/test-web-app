
const calculateTotal = (invoices: any) => {
    let total = 0;
    if(invoices){
        for(let i = 0; i < invoices.length - 1 ; i++){
            total =+ invoices[i].amount;
        }
    }
    
    return total;
}

export {calculateTotal}