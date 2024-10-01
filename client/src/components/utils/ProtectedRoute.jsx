import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom"
import axios from "axios"

export default function ProtectedRoute({ children }){
    const [isLog, setIsLog ] = useState(null)


    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await axios.get("http://localhost:5000/api/auth/protected",
                    {
                        withCredentials: true
                    }
                )

                if (response.status === 200) {
                    setIsLog(true)
                } else {
                    setIsLog(false)
                }
            } catch (err) {
                console.error("Error during authentification check", err)
                setIsLog(false)
            }
        }
        checkAuth()
    }, [])

    if (isLog === null) {
        return <div> Loading... </div> 
    }

    return isLog ? children : <Navigate to="/" replace/>
}
