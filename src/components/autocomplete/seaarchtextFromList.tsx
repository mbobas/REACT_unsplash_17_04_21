import { useState } from "react";

    export const handleSearchText = (searchText: string) => {
        let [autoCompletematches, setautoCompletematches] = useState([] as any);
        let [autoCompletematchesXresults, setautoCompletematchesXresults] = useState([]);
        const data = require("word-list-json");
        console.log("handleSearchText, szukany text " + searchText)
        //Initializeation of data to autocompleete
        
        for (var i=0; i<100; i++) {
            //console.log(data[i])
            //setautoCompletematches(data[i]);
            //setautoCompletematches((prevState: any) => [...prevState, data[i]]);
            
        }
        //console.log("data"+ data)

       //Get autoCompletematches to current text input 
        let results = data.filter((item: any) => {
             item.match(searchText)
             //console.log("item"+ item.match(searchText))
             
        })
        setautoCompletematches(results);

        if (searchText.length === 0 ) {
            setautoCompletematches([]);
        }
        setautoCompletematchesXresults(autoCompletematches.slice(0,5));

        console.log("handleSearchText")
        console.log(autoCompletematchesXresults);
     

    };
