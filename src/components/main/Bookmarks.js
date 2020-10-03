import React, { useState, useEffect } from 'react';

// class Bookmarks extends React.Component {
//
//     // constructor(props) {
//     //     super(props);
//     // }
//     render() {
//
//         return (
//             <div className="mainContent">
//                 <div className="menu">
//                     menu
//
//                 </div>
//                 <div className="mainText">
//                     Bookmarks
//
//                 </div>
//
//             </div>
//         );
//     }
// }

function Bookmarks() {
    // Объявляем новую переменную состояния "count"
    const [count, setCount] = useState('wer');

    // По принципу componentDidMount и componentDidUpdate:
    // useEffect(() => {
    //     // Обновляем заголовок документа, используя API браузера
    //     document.title = `Вы нажали ${count} раз`;
    // });

    return (
        <div>
            <p>Вы нажали {count} раз</p>
            <button onClick={() => setCount(count + 'a')}>
                Нажми на меня
            </button>
        </div>
    );
}

export default Bookmarks;