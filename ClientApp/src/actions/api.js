import axios from "axios"

const baseUrl = "https://localhost:5001/api/"

export default {
        account(url = baseUrl + 'Accounts/') {
                // console.log(url;
                return {
                        getAllSub: () => axios.get(url + "NotMasterAccounts"),
                        getAllMaster: () => axios.get(url + "MasterAccounts"),
                        getById: (id) => axios.get(url + id),
                        addAccount: (account) => axios.post(url, account),
                        editAccount: (id, account) => axios.put(url + id, account),
                        deleteAccount: (id) => axios.delete(url + id),
                }
        }

}