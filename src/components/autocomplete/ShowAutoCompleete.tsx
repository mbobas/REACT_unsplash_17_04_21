import React from "react";
import RenderListAutocomplete from "./RenderListAutocomplete";

interface Props {
    resultCollection: any, 
    toggleAutoCompleeteFields: any, 
    toggleAutocomplete: any, 
    updateSearchPhoto: any,
  }
 
  export const ShowAutoCompleete: React.FC<Props> = ({resultCollection, toggleAutoCompleeteFields, toggleAutocomplete, updateSearchPhoto}) => {
    if (toggleAutocomplete) {  
        return (
                <RenderListAutocomplete 
                resultCollection={resultCollection} 
                toggleAutoCompleeteFields={toggleAutoCompleeteFields}
                updateSearchPhoto={updateSearchPhoto}
            />
            )
        } else if (toggleAutocomplete == false) {
            return (<span></span>);
        } else {
            return (<span>No matches! 👎</span>)
        }
    }

    
   export const autoCompleete = (event: any, settoggleAutocomplete: any, toggleAutocomplete: any  ) => {
    if (event.target.value.length === 3){
        settoggleAutocomplete(true);
        console.log(toggleAutocomplete);
    }
    if (event.target.value.length > 3) {
    }
    if (event.target.value.length < 3){
        settoggleAutocomplete(false);
        console.log(toggleAutocomplete);
    }
}

