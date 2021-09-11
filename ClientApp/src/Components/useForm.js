import React, { useState } from "react";
import { connect } from "react-redux";

const useForm = (initialFieldValues) => {
        const [values, setValues] = useState(initialFieldValues);

        const handelInputChange = (e)=> {
        
                const {name, value} = e.target?e.target:{name:'CreateDate',value:e}
                        setValues({
                                ...values,
                                [name]: value
                        })
                        console.log(e.target);
        }

        return {
                values,
                setValues,
                handelInputChange
        };
}

export default useForm
// export default connect()(useForm);