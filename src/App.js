import React, { Fragment } from "react";
import { ListOfCategories } from "./components/ListOfCategories";
//import { Category } from "./components/Category";
import { GlobalStyle } from "./styles/GlobalStyles";
import { PhotoCard } from "./components/PhotoCard";
import { ListOfPhotoCards } from "./components/ListOfPhotoCards";
import {Logo} from "./components/Logo";
import { PhotoCardWithQuery } from "./container/PhotoCardWhitQuery";
import { Home } from "./pages/Home";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export const App = () => {
    const urlParams = new window.URLSearchParams(window.location.search)
    const detailId = urlParams.get('detail')
    
    return (
    <div>    
        <GlobalStyle/>
        <BrowserRouter>
        <Logo/>
        {detailId 
        ?<PhotoCardWithQuery id = {detailId}/>
        : 
                <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/pet/:id' element={<Home />} />
                </Routes>
              
        }
        </BrowserRouter>
    </div>
    )
}
