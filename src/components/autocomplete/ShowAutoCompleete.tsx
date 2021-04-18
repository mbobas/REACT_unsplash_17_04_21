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