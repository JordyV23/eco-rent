import { backendApi } from "../../api/backend-api";

export const useUsers = () => {

    const getUsers = async () => {
        const {data} = await backendApi.get("/usuarios.php");
        return data;
    }

    return {
        getUsers
    }
}