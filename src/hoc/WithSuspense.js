import { Suspense } from "react";
import Preloader from "../components/Common/Preloader/Preloader";


export const WithSuspense = (Component) => {
    return (props) => {
        <Suspense fallback={<div><Preloader /></div>}>
            <Component {...props} />
        </Suspense>
        
    }
}