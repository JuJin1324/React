import React, { Component } from 'react';

// class MyName extends Component {
//     static defaultProps = {
//         name : '기본이름'
//     }
//     render() {
//         return(
//             <div>

//                 안녕하세요! 여러분 반갑습니다. 저는 <b>{this.props.name}</b> 입니다~
//             </div>
//         );
//     }
// }

const MyName = ({name}) => {
    return(
        <div>
            안녕하세요! 여러분 반갑습니다. 저는 <b>{name}</b> 입니다~
        </div>
    );
};

export default MyName;