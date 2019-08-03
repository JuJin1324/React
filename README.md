# React Demos

## 참고
* <a>https://velopert.com/reactjs-tutorials</a>

### 터미널로 git 연동하기
```
1. git의 파일을 넣을 디렉토리 생성
예시) # mkdir ~/dev/workspace-react

2. 리액트파일 넣을 디렉토리로 이동
예시) # cd ~/dev/workspace-react

3. 이동한 디렉토리에서 깃 초기화
# git init

4. 외부저장소(GitHub)에서 소스가져오기
# git pull https://github.com/JuJin1324/React-demos.git

5. 리액트 프로젝트로 이동 후 nodejs 모듈 가져오기
예시) # yarn eject

5-1. 모듈이 안생기고 에러가난 경우
# npm update 
이후 다시 
# yarn

6. 리액트 시작
# yarn start
```

### Component LifeCycle API
![스크린샷 2019-08-03 오후 9 46 24](https://user-images.githubusercontent.com/16306672/62412537-1dc2a080-b63f-11e9-890e-893ec758d3ef.png)

1. constructor
* 컴포넌트가 처음 만들어질 때 실행
* 기본 state 설정할 수 있음

2. componentWillMount
* 컴포넌트가 DOM 위에 만들어지기 전에 실행

2. componentDidMount
* 첫 render 함수 이후 실행
* 여기서 다른 javascript framework 연동 
* setTimeout, setInterval 및 Ajax 사용
* DOM 처리

3. componentWillReceiveProps
* props를 받을 때 실행
* props 에 따라 setState로 state를 업데이트하기 유용

4. shouldComponentUpdate
* props/state 가 변경되었을 때 return true 혹은 false 로 리렌더링 여부를 정한다.

5. componentWillUpdate
* 컴포넌트가 업데이트되기 전에 실행
※ 주의) 여기서는 setState를 절대 사용하지 않는다.(무한루프에 빠지게 된다)

6. componentDidUpdate
* 컴포넌트가 리렌더링을 마친 후 실행
※ 주의) 여기서는 setState를 절대 사용하지 않는다.(무한루프에 빠지게 된다)

7. componentWillUnmount
* 컴포넌트가 DOM 에서 사라진 후 실행
