## 포켓몬 API를 활용한 포켓몬 도감 사이트

PokeAPI를 활용하여 포켓몬의 정보를 다룬 포켓몬 도감 사이트는 React와 TypeScript, 그리고 Redux 툴킷을 활용하여 개발되었습니다. 또한 firebase DB를 활용하여 사용자의 정보를 저장하고, Google을 연동하여 로그인합니다. 이 프로젝트에서 TypeScript를 통해 타입 안정성을 확보하는 방법과, Redux 툴킷을 활용하여 상태 관리를 용이하게 처리하는 방법, Firebase Realtime Database는 실시간으로 데이터를 동기화하고 관리하는 방법을 학습하였습니다.

![image](https://github.com/seolhee313/pokedex/assets/125417882/252786e4-f7f9-4259-9f56-ee1bf79b8e56)

- Live Demo : https://sitecheon-pokemon.netlify.app/
- 작업 기간 : 5일

## 사용 스택

- React
- React Hooks
- React Router
- TypeScript
- CSS3 & SCSS
- Redux and Redux Toolkit
- Firebase
- Firestore
- Axios for API
- Hosting the app on Netlify

## 학습 내용 정리

💛 react-router-dom : React 기반의 웹 애플리케이션에서 브라우저 기반 라우팅을 처리하기 위한 패키지입니다. React Router 라이브러리의 DOM 버전이며, React Router는 싱글 페이지 애플리케이션(SPA)에서 브라우저의 URL과 페이지 컴포넌트를 매핑하고 관리하는 기능을 제공합니다.

- useLocation : 현재 URL 정보를 얻을 수 있게 해주는 기능입니다.
- Link : 애플리케이션에서 클라이언트 측 네비게이션을 제공하는 역할을 합니다.
- BrowserRouter : 브라우저 기반의 라우팅을 처리하기 위해 사용되는 최상위 라우터 컴포넌트입니다.
- Route, Routes : 웹 애플리케이션의 라우팅을 다루기 위해 사용됩니다.
- useParams : URL 경로에서 동적으로 설정된 파라미터들을 추출할 수 있게 해주는 기능입니다.

💛Redux : Redux는 Flux 아키텍처의 아이디어를 바탕으로 만들어진 상태 관리 패턴이며, 애플리케이션의 상태를 중앙 집중화하여 관리하는 방법을 제공합니다. 이를 통해 복잡한 애플리케이션에서 상태 관리를 용이하게 만들고 예측 가능한 상태 변화를 구현할 수 있습니다.

Redux의 주요 구성 요소 : Action, Reducer, Store, Dispatch
- useAppDispatch : Redux를 사용하는 리액트 애플리케이션에서 Redux store에 액션을 디스패치(dispatch)하는 데 사용되는 custom hook입니다.
- useAppSelector : Redux를 사용하는 리액트 애플리케이션에서 Redux store의 상태(state)를 선택하기 위해 사용되는 custom hook입니다.
- useSelector : Redux store의 상태를 선택하기 위해 사용되는 커스텀 훅입니다. 컴포넌트 내에서 useSelector를 사용하여 store의 특정 상태를 선택하고 해당 상태의 값에 접근할 수 있습니다.
- useDispatch : Redux store에 액션을 디스패치하기 위해 사용되는 커스텀 훅입니다. useDispatch를 사용하여 액션을 디스패치하고 상태를 변경할 수 있습니다.
- useStore : Redux store 객체에 접근하기 위해 사용되는 커스텀 훅입니다. 주로 상태와 액션을 직접 다루어야 할 경우에 사용됩니다.

## 특징

- 포켓몬 서치
- 구글 계정을 연동하여 로그인
- 포켓몬 스택 비교
- 포켓몬 정보
- 포켓몬 리스트

## 개발 환경 프로젝트 실행 방법

1. **레포지토리 클론 :** `git clone https://github.com/seolhee313/pokedex`
2. **종속성 설치 :** `npm install`
3. **환경 변수 세팅 :** `pokemonAPI` 입력 ([ pokeapi ](https://pokeapi.co/)에서 API Key 발급 필요)
4. **프로젝트 시작 :** `yarn start`

## 감사의 말

- 이 프로젝트는 [Kishan Sheth](https://www.youtube.com/@KishanSheth21)의 [튜토리얼](https://www.youtube.com/watch?v=qs2neNqLcmw)을 기반으로 합니다.

## Screenshots

![image](https://github.com/seolhee313/pokedex/assets/125417882/224de9a0-ec66-4004-9d77-8e746865f3e5)
![image](https://github.com/seolhee313/pokedex/assets/125417882/78509cb2-392c-46aa-b178-05cafa1d1ff9)
![image](https://github.com/seolhee313/pokedex/assets/125417882/11c3c357-f437-49b1-a432-a379e8d63274)
![image](https://github.com/seolhee313/pokedex/assets/125417882/feb58173-cd4b-4140-b59d-5a340ee6406d)
![image](https://github.com/seolhee313/pokedex/assets/125417882/be59f258-91be-415a-99a4-7b9dfcef608a)
![image](https://github.com/seolhee313/pokedex/assets/125417882/c9a1bd67-63d5-4485-8ddb-fa5d214a36f4)
