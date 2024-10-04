import Swal from "sweetalert2";
import { updateRoleRequest } from "../../apiRequest/userApiRequest";


export function updateRole(id,status){
    return Swal.fire({
        title:"Update Status",
        input:"select",
        inputOptions:{admin:"admin",user:"user" , company:"company"},
        inputValue:status,
        inputPlaceholder: "Select a Role",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Update",
        inputPlaceholder: "Select a role",
        showCancelButton: true,
    }).then((result)=>{
         if(result.isConfirmed){
             return updateRoleRequest(id,result.value).then((res)=>{
                return res ;
            })
        }
    })
}