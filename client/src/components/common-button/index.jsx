import { Button } from "../ui/button";

function CommonButton({onClick, buttonText, type, disabled}){
    return (
        <div>
             <Button
               type ={type || 'submit'}
               onClick = {onClick || null}
               disabled ={disabled || false}
               className="bg-black text-white px-5 py-2 mt-5 cursor-pointer hover:bg-gray-600"
             >{buttonText}</Button>
        </div>
    )
}
export default CommonButton;