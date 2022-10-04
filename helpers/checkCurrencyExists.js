module.exports = {
    checkCurrency(currency) {
        if (currency == 'oficial' || currency == 'blue' || currency == 'oficial_euro' || currency == 'blue_euro') {
            return currency
        }else{
            return null
        }
    }
}