# dust_alaram

## ✅ 요구사항

- 미세먼지 정보를 표시하기 위한 카드 형태의 컴포넌트 제작

- 카드 컴포넌트에서 styled-component 혹은 sass 등을 적절히 활용하여, props에 따라 배경색, 글자색 등이 달라지도록 제작 (미세먼지 수치에 따라 카드의 색상이 변화할 수 있도록)

- 카드 컴포넌트에 즐겨찾기 등록/해제를 위한 버튼을 만들고, 즐겨찾기 등록 여부에 따라 버튼의 형태가 달라지도록 제작

- 지역을 변경하기 위한 드롭다운 메뉴 형태의 컴포넌트 제작 (지역을 변경하면 화면에 표시되는 카드의 미세먼지 지역/수치 등의 정보도 변경에 지역에 맞추어서 달라져야함)

- 기본 지역 보기 / 전체 보기 / 즐겨찾기 지역 보기를 전환할 수 있도록 화면 하단에 탭 컴포넌트 제작

- 기본 지역 보기 / 전체 지역 보기 / 즐겨찾기 지역 보기 페이지 각각 구현

- react-redux를 활용해서 즐겨찾기 등록/해제 액션에 따라 즐겨찾기 데이터가 변경되도록 하고, 즐겨찾기 데이터는 어떤 컴포넌트에서든 불러올 수 있도록 제작 (container를 만들어서 활용할 것)

- `redux-toolkit`과 `createAsyncThunk`를 활용, 내 위치 및 즐겨찾기에 대한 상태를 전역적으로 관리 하였습니다.

## ✍️ 사용 기술

<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=redux&logoColor=white"> <img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"> <img src="https://img.shields.io/badge/tailwindcss-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=black">

## 📚 구조

```
  📦src
   ┣ 📂components
   ┃ ┣ 📜Card.tsx
   ┃ ┣ 📜Layout.tsx
   ┃ ┣ 📜Loader.tsx
   ┃ ┣ 📜Nav.tsx
   ┃ ┣ 📜NotFound.tsx
   ┃ ┗ 📜Select.tsx
   ┣ 📂routes
   ┃ ┣ 📜EntireArea.tsx
   ┃ ┣ 📜Liked.tsx
   ┃ ┗ 📜MyArea.tsx
   ┣ 📂store
   ┃ ┣ 📂slice
   ┃ ┃ ┗ 📜dustSlice.ts
   ┃ ┗ 📜index.ts
   ┣ 📂utils
   ┃ ┣ 📜constants.ts
   ┃ ┗ 📜index.ts
   ┣ 📜App.tsx
   ┣ 📜api.ts
   ┣ 📜index.css
   ┣ 📜main.tsx
   ┗ 📜vite-env.d.ts
```
