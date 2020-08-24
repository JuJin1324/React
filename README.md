# React 시작하기

## Install
### nodejs 설치
* macOS: `brew install nodejs`
* Ubuntu: `sudo apt-get update; sudo apt-get install -y nodejs`

### create-react-app 설치
설치: `npm install -g create-react-app`

## 프로젝트
### 생성
``` bash
cd my-react-workspace
create-react-app my-first-react
```

### git clone 
git clone 으로 땡겨온 React 프로젝트 설정하기
* clone 한 프로젝트로 이동 후 `yarn install` 명령어 실행
* 명령어가 오류가 나는 경우 `npm update` 이후 다시 `yarn install` 실행

### 실행
프로젝트 실행: `yarn start`

### IntelliJ 제품군을 통한 React 실행 방법
1. Command(윈도우에선 Ctrl) + Shift + a 에서 `run...` 타이핑 후 앤터
2. 좌측 상단 `+` 버튼 클릭 -> npm 
3. Command 항목에는 `run`, Scripts 항목에는 `start` 입력 후 Apply 버튼을 눌러 저장
4. 실행  

## JSX
JSX는 자바스크립트 문법의 확장판. HTML + javascript 를 사용하도록 도와준다.

## javascript bind
javascript 함수에서 this 를 사용하는 경우 this는 기본적으로 Window 객체로 동작한다.   
this 를 내가 원하는 객체로 맵핑 시키는 것이 bind 함수이며 다음 링크를 참조하자. 
[binding의 개념과 call, apply, bind의 차이점](https://wooooooak.github.io/javascript/2018/12/08/call,apply,bind/)

### React 에서 bind
React 클래스 내부의 메서드에서 this 를 사용하는 경우 기본적으로 this에 아무것도 맵핑되어 있지 않다.
직접 아래의 코드를 복붙해서 실행시키고 크롬 브라우저에서 실행 이후 F12를 눌러 개발자도구에서 console을 보면 undefined 라고 찍힐 뿐이다.
```javascript
class EventHandling extends Component {
    constructor(props) {
        super(props);
    }
    handleClick() {
        console.log(this);
    }
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>버튼</button>
            </div>
        );
    }
}

function App() {
    return (
        <div id="root">
            <EventHandling/>
        </div>
    );
}
...
``` 
this 를 클래스 자신으로 바인딩 하기 위해서는 위의 handleClick 메서드를 다음처럼 화살표 함수로 선언을 하거나,
```javascript
    handleClick = () => {
        console.log(this);
    }
```
혹은 constructor 부분에서 bind 함수를 통해서 해당 함수에 클래스 자신을 직접 바인딩한다.
```javascript
constructor(props) {
    super(props);
    this.state = {
        isToggleOn: true
    }
    this.handleClick = this.handleClick.bind(this);
}
```

## Style
### Material-UI
사이트: [Official](https://material-ui.com/)
* 좌측 상단 메뉴바 -> Component API 에서 스타일 소스 확인

## 강좌
* [튜토리얼 : React.JS 강좌 목록](https://velopert.com/reactjs-tutorials)
* [튜토리얼 : React.js 강좌 시리즈](https://www.youtube.com/watch?v=GEoNiUcVwjE&list=PL9FpF_z-xR_GMujql3S_XGV2SpdfDBkeC&index=1)
* [Component LifeCycle API](https://github.com/JuJin1324/React-demos/wiki/Component-LifeCycle-API)
* [리액트의 Hooks 완벽 정복하기](https://velog.io/@velopert/react-hooks)
* [다양한 방식의 리액트 컴포넌트 스타일링 방식 CSS, Sass, CSS Module, styled-components](https://velog.io/@velopert/react-component-styling)
* [React 커링 및 HOC(Higher Order Component) - 확장성을 고려한 React 컴포넌트](https://velog.io/@kyusung/%EB%A6%AC%EC%95%A1%ED%8A%B8-%EA%B5%90%EA%B3%BC%EC%84%9C-%ED%99%95%EC%9E%A5%EC%84%B1%EC%9D%84-%EA%B3%A0%EB%A0%A4%ED%95%9C-React-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8)
* [React의 기본, 컴포넌트를 알아보자](https://medium.com/little-big-programming/react%EC%9D%98-%EA%B8%B0%EB%B3%B8-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%EB%A5%BC-%EC%95%8C%EC%95%84%EB%B3%B4%EC%9E%90-92c923011818)
* [Flux로의 카툰 안내서](http://bestalign.github.io/2015/10/06/cartoon-guide-to-flux/)
* [Redux로의 카툰 안내서](http://bestalign.github.io/2015/10/26/cartoon-intro-to-redux/)
* [Render Props](https://ko.reactjs.org/docs/render-props.html)
* [리액트 코드 스플리팅](https://velog.io/@velopert/react-code-splitting)

### VSCode React 플러그인
* 블로그 - [리액트 프로젝트에 ESLint 와 Prettier 끼얹기](https://velog.io/@velopert/eslint-and-prettier-in-react)

### Chrome Extension
* [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
