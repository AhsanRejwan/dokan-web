import type {NextPage} from "next";
import { MdErrorOutline } from "react-icons/md";

export const StoreNotFound: NextPage = () => {
    return (
        <div className="w-100 home-placeholder d-flex flex-column justify-content-center align-items-center">
            <div className="d-flex align-items-center">
                <MdErrorOutline size={35} color="#ce3d3d"/>
                <h1 className="ml-3 text-danger">No such store was found....</h1>
            </div>
            <h3 className="primary">Please ensure to visit valid store url provided by store owner.</h3>
        </div>
    )
}
