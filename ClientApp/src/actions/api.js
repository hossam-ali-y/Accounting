import axios from "axios"

const baseUrl = "https://localhost:5001/api/"

export default {
        account(url = baseUrl + 'Accounts/') {
                return {
                        getAllSub: () => axios.get(url + "NotMasterAccounts"),
                        getAllParent: () => axios.get(url + "MasterAccounts"),
                        getById: (id) => axios.get(url + id),
                        add: (account) => axios.post(url , account),
                        add: (id, account) => axios.put(url + id, account),
                        add: (id) => axios.delete(this.url + id),
                }
        }

}