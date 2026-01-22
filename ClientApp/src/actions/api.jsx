import axios from "axios"

const baseUrl = "https://localhost:5001/api/"

export default {
        account(url = baseUrl + 'Accounts/') {
                // console.log(url;
                return {
                        getAll: () => axios.get(url + "Map"),
                        getAllSub: () => axios.get(url + "NotMasterAccounts"),
                        getAllMaster: () => axios.get(url + "MasterAccounts"),
                        getById: (id) => axios.get(url + id),
                        addAccount: (account) => axios.post(url, account),
                        editAccount: (id, account) => axios.put(url + id, account),
                        deleteAccount: (id) => axios.delete(url + id),
                }
        },
        vouchers(url = baseUrl + 'Ledgers/') {
                // console.log(url;
                return {
                        getAll: () => axios.get(url + "Map"),
                        getAllDebit: () => axios.get(url + "DebitLedger"),
                        getAllCredit: () => axios.get(url + "CreditLedger"),
                        getById: (id) => axios.get(url + id),
                        addVoucher: (voucher) => axios.post(url+'post', voucher),
                        editVoucher: (id, voucher) => axios.put(url+'put/' + id, voucher),
                        deleteVoucher: (id) => axios.delete(url + id),
                }
        }

}