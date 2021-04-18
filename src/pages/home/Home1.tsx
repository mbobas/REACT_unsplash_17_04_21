import React, {useState } from 'react';
import { toJson } from 'unsplash-js';
import "pages/home/Home.css";
import RenderListAutocomplete from 'components/autocomplete/RenderListAutocomplete';
import { Link, Redirect} from 'react-router-dom';
import {IconContext} from "react-icons";
import {FaSearch} from "react-icons/fa"
import {unsplash} from 'components/api//unsplashAPI'


export default function Home() { 
    const [photo, setPhoto] = useState("sunset");
    const [resultCollection, setResultCollection] = useState([]);
    //const [resultPhotos, setResultPhotos] = useState([]);
    const [toggleAutocomplete, settoggleAutocomplete] = useState(false);
    const [redirectTo, setStateRedirect] = useState(false);

    const handleChange = (event: any ) => {
        handleSearchCollections(event);
        setPhoto(event.target.value);
    }

    // const handleSearchPhotos = (event:any) => {
    //     unsplash.search.photos(event.target.value, 1, 15)
    //         .then(toJson)
    //         .then(json => {
    //             console.log("handleSearchPhotos" + photo);
    //             console.log(json);
    //             setResultPhotos(json.results)
    //         });
    
    const handleSearchCollections = (event:any) => {
        unsplash.search.collections(event.target.value, 1, 5)
            .then(toJson)
            .then(json => {
                console.log("handleSearchCollections");
                console.log(json.results);
                setResultCollection(json.results)
            });
    }

    const redirect = (event: any) => {
        setStateRedirect(true);

    }

    // const onKeyDown = (event:any ) => {
    //     if (event.key === 'Enter') {
    //         console.log('OnKeyDown: ' + photo);
    //         updateSearchPhoto(photo);
    //         settoggleAutocomplete(false);
    //         redirect(photo);
    //       }
    // }
   
    const autoCompleete = (event: any) => {
        if (event.target.value.length === 3){
            settoggleAutocomplete(true);
            console.log(toggleAutocomplete);
        }
        if (event.target.value.length > 3) {
        console.log(event.target.value.length + "StartAutocomplete")
        }
        if (event.target.value.length < 3){
            settoggleAutocomplete(false);
            console.log(toggleAutocomplete);
        }
    }

    const updatePhotoCollections = (photo: any) => {
        setPhoto(photo);
        unsplash.search.collections(photo, 1, 20)
            .then(toJson)
            .then(json => {
                console.log("updateCollections");
                console.log(json.results);
                setResultCollection(json.results)
            });
    }

    const updateSearchPhoto = (photo: any) => {
        setPhoto(photo);
        // unsplash.search.photos(photo, 1, 15)
        // .then(toJson)
        // .then(json => {
        //     console.log("updateSearchPhoto");
        //     console.log(json);
        //     //setResultPhotos(json.results)
        // });
    }

    const toggleAutoCompleeteFields = (toggleStatus: any) => {
            settoggleAutocomplete(toggleStatus);
            console.log("Toggle" + toggleStatus);
    }

    function ShowAutoCompleete(props: any) {
        if (toggleAutocomplete) {  
            return (
                    <RenderListAutocomplete 
                    resultCollection={props.resultCollection} 
                    toggleAutoCompleeteFields={toggleAutoCompleeteFields}
                    updateSearchPhoto={updateSearchPhoto}
                />
                )
        } else {
            return (<span></span>);
        }
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
                            onChangeCapture={autoCompleete}
                            onChange={handleChange} 
                            //onKeyDown={onKeyDown}
                            type="text" name="photo" 
                            placeholder="Search for high resolution photos" 
                        />
                        </form>
                    </div>
                    <div className="toogleAutocompleteH">
                        <ShowAutoCompleete resultCollection={resultCollection}/>
                    </div>
                </div>  
            </div>
        </div>
    );
}

}




