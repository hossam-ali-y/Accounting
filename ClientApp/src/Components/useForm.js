import React, { useState } from "react";
import { connect } from "react-redux";

const useForm = (initialFieldValues, setCurrentId) => {
        const [values, setValues] = useState(initialFieldValues);

        const handelInputChange = (e) => {
                console.log(e.target);
                const { name, value } = e.target ? e.target : { name: 'CreateDate', value: e }
                setValues({
                        ...values,
                        [name]: value
                })
                console.log(values);
        }

        const resetForm = () => {
                setValues({
                        ...initialFieldValues
                })
                setCurrentId(0)
                console.log(values);
                // setReset()
                // return reset;
        }

        return {
                values,
                setValues,
                handelInputChange,
                resetForm,
        };


}

export default useForm
// export default connect()(useForm);