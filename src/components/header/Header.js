import React from 'react';
import {Link} from 'react-router-dom'
import '../../theme/header/header.css';

function Links(props) {
    return (
        <Link
            className="link"
            style={props.style}
            to={'/' + props.onClick}>
            {props.icon && <img alt=" " className="icon" src={props.icon}/>}
            {props.label}
        </Link>
    );
}

const items = [
    {label: 'Поиск', onClick: 'search', icon: "https://img.icons8.com/ios/50/000000/search.png"},
    {label: 'Книги', onClick: 'books', icon: "https://img.icons8.com/ios/50/000000/book.png"},
    {label: 'Авторы', onClick: 'authors', icon: "https://img.icons8.com/ios/50/000000/quill-with-ink.png"},
    {label: 'Избранное', onClick: 'likes', icon: "https://img.icons8.com/ios/50/000000/like.png"},
    {label: 'Настройки', onClick: 'settings', icon: "https://img.icons8.com/ios/50/000000/settings.png"},
    {label: 'Закладки', onClick: 'bookmarks', icon: "https://img.icons8.com/ios/50/000000/bookmark-ribbon.png"},
    {
        label: 'Словарь ',
        onClick: 'vocabulary',
        icon: "https://img.icons8.com/ios-glyphs/64/000000/sentence-case--v2.png"
    },
];

const Header = () => (
    <header className="header">
        <div className="navigation">
            {items.map((item, idx) => {
                return <Links {...item} key={idx}/>
            })}
        </div>
    </header>
);

export default Header;