import React from 'react'
import GPTSearchBar from './GPTSearchBar';
import GPTMovieSuggestion from './GPTMovieSuggestion';
import Header from './Header';

const GPTSearch = () => {
  return (
    <div className='bg-black h-screen w-[100%]'>
        <Header/>
        <GPTSearchBar/>
        <GPTMovieSuggestion/> 
    </div>
  )
}

export default GPTSearch;