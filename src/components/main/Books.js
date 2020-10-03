import React, { useState } from 'react';

function Button(props) {
    const iconStyle = {
        marginBottom: '-2px',
        height: '25px',
    };
    return (
        <button
            className="link"
            style={props.style}
            onClick={props.click}>
            {props.icon && <img alt=" " src={props.icon} style={iconStyle}/>}
        </button>
    );
}



// class Books extends React.Component {
//
//     // constructor(props) {
//     //     super(props);
//     // }
//     render() {
//         return (
//             <div>
//                 <div className="menu">
//                     menu
//                 </div>
//                 <div className="mainContent">
//                     <div className="mainText">
//                         Booksssssssssssssssssssssss ssssssssssssssssssss
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }


function Books() {
    // Объявляем новую переменную состояния "count"
    const [count, setCount] = useState('wer');

    // По принципу componentDidMount и componentDidUpdate:
    // useEffect(() => {
    //     // Обновляем заголовок документа, используя API браузера
    //     document.title = `Вы нажали ${count} раз`;
    // });

    return (
        <div>
            <div className="menu">
                <div className="rightSide">
                    {/*<button onClick={() => setCount(count + 'a')}>*/}
                    {/*    Нажми на меня*/}
                    {/*</button>*/}
                    <Button icon = "https://img.icons8.com/ultraviolet/40/000000/chevron-right.png" click={function () {
                        setCount(count + 'a');
                        console.log('click');
                    }}/>
                </div>

            </div>
            <div className="mainContent">
                <div className="mainText">
                    Booksssssssssssssssssssssss ssssssssssssssssssss
                    <div>Вы нажали {count} раз</div>
                </div>
            </div>
        </div>
    );


}

export default Books;