import React from 'react';
import '../../theme/main/main.css';
import { Switch, Route } from 'react-router-dom';
import Vocabulary from "../main/Vocabulary.js";
import Bookmarks from "../main/Bookmarks.js";
import Books from "../main/Books.js";


const Main = () => (
    <main className="main">
        <Switch>
            <Route exact path='/' component={Vocabulary}/>
            <Route path='/bookmarks' component={Bookmarks}/>
            <Route path='/vocabulary' component={Vocabulary}/>
            <Route path='/books' component={Books}/>
        </Switch>
    </main>
);

export default Main;