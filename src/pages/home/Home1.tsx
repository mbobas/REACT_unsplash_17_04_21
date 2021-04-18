import React, {useState } from 'react';
import { toJson } from 'unsplash-js';
import "pages/home/Home.css";
import { Link, Redirect} from 'react-router-dom';
import {IconContext} from "react-icons";
import {FaSearch} from "react-icons/fa"
import {unsplash} from 'components/api//unsplashAPI'
import {ShowAutoCompleete, autoCompleete} from 'components/autocomplete/ShowAutoCompleete';


export default function Home() { 
    const [photo, setPhoto] = useState("sunset");
    const [resultCollection, setResultCollection] = useState([]);
    const [toggleAutocomplete, settoggleAutocomplete] = useState(false);
    const [redirectTo, setStateRedirect] = useState(false);

    const handleChange = (event: any ) => {
        handleSearchCollections(event);
        setPhoto(event.target.value);
    }
    
    const handleSearchCollections = (event:any) => {
        unsplash.search.collections(event.target.value, 1, 5)
            .then(toJson)
            .then(json => {
                console.log(json.results);
                setResultCollection(json.results)
            });
    }

    const redirect = (event: any) => {
        setStateRedirect(true);

    }
    

    const updateSearchPhoto = (photo: any) => {
        setPhoto(photo);
    }

    const toggleAutoCompleeteFields = (toggleStatus: any) => {
            settoggleAutocomplete(toggleStatus);
    }


    if (redirectTo === true) {
    return <Redirect to={'/:'+photo} />
           
    } else {    
    return (
        <div className="AppH">
            <div className="top-of-appH">

                <Link to="/"><div className="home-linkH">Home</div></Link>
                <a className="about-linkH" target='_blank' href="https://github.com/mbobas" rel="noreferrer">About</a>

                <div className="logo-and-searchbar-containerH">
                    <span className="logo-unsplash-bigH">Usnplash Photo Search in React</span>
                    <span className="logo-unsplash-smallH">The internet’s source of freely-usable images.
                        <br />Powered by creators everywhere.</span>
                    <div className="search-bar-with-button-containerH">
                        <Link to={'/:'+photo}>
                            <div className="searchButtonH"
                                onClick={handleSearchCollections}>
                            <IconContext.Provider value={{ style: {fontSize: '30px', color: "rgb(255,255,255,0.7)"}}}>
                                <FaSearch />
                            </IconContext.Provider>
                            </div>
                        </Link>
                        <form
                            autoComplete="off"
                            className="form"
                            onSubmit={redirect}
                            >
                        <input className="search-barH"
                            value={photo}
                            onChangeCapture={(e) => autoCompleete(e, settoggleAutocomplete, toggleAutocomplete)}
                            onChange={handleChange} 
                            //onKeyDown={onKeyDown}
                            type="text" name="photo" 
                            placeholder="Search for high resolution photos" 
                        />
                        </form>
                    </div>
                    <div className="toogleAutocompleteH">
                        <ShowAutoCompleete 
                            resultCollection={resultCollection}
                            toggleAutoCompleeteFields={toggleAutoCompleeteFields}
                            toggleAutocomplete={toggleAutocomplete}
                            updateSearchPhoto={updateSearchPhoto}
                            

                            />
                    </div>
                </div>  
            </div>
        </div>
    );
}

}




