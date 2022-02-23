import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

function App() {
  return (
    <div>
        <PageTitle title = {"This is App component"}/>
        <PageTitle title = {"My Friends"}/>
        <Rating value={3}/>
        <Accordion title = {"Menu"}/>
        <Accordion title = {"One more Menu"}/>
        <Rating value={0}/>
        <Rating value={1}/>
        <Rating value={2}/>
        <Rating value={3}/>
        <Rating value={4}/>
        <Rating value={5}/>
    </div>
  );
}

function PageTitle(props: any) {
    return <h1>{props.title}</h1>
}



export default App;
