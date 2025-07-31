import axios from "../../utils/axios"

export const asyncRegisterUser = (formData) => async (dispatch) => {
    try {
        const { data } = await axios.post('/api/auth/register', formData)
        console.log(data);

    } catch (error) {
        console.log(error);
    }
}

