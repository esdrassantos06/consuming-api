import { useEffect, useState } from "react";
import api from "../utils/api";

export const useFetchData = () =>{
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect( ()=>{
        const fetchData = async () =>{

            try{
                const response = await api.get('/');
                setData(response.data);
                console.log(response.data);
            }
            catch(err){
                console.error("Erro ao buscar dados", err);
            }
            finally{
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    return { data, loading };
}