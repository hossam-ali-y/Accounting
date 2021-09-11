import axios from "axios"

const baseUrl = "https://localhost:5001/api/"

export default {
        account(url = baseUrl + 'Accounts/') {
                return {
                        getAllSub: () => axios.get(url + "NotMasterAccounts"),
                        getAllMaster: () => axios.get(url + "MasterAccounts"),
                        getById: (id) => axios.get(url + id),
                        add: (account) => axios.post(url , account),
                        edit: (id, account) => axios.put(url + id, account),
                        delete: (id) => axios.delete(this.url + id),
                }
        }

}