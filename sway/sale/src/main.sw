contract;

abi SaleContract {
    #[storage(read)]
    fn is_whitelisted(user: Identity, max_payment:u256,key:u64, proof:Vec<b256>) -> bool;
}

impl SaleContract for Contract {
    #[storage(read)]
    fn is_whitelisted(user: Identity, max_payment:u256,key:u64, proof:Vec<b256>) -> bool {
        // check_whitelist(user,max_payment,key,proof)
        return true
    }
}
