
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
    

