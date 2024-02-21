<p align="center">
  <h1 align="center">🙌 리액트 토이프로젝트 simple-note app 입니다 🙌</h1>
  <p align="center">
 <img src="https://img.shields.io/badge/-NextJS-05122A?style=flat&logo=Next.js&logoColor=ffff"/>
    <img src="https://img.shields.io/badge/-TypeScript-05122A?style=flat&logo=Typescript&logoColor=blue"/>
    <img src="https://img.shields.io/badge/-SASS-05122A?style=flat&logo=Sass&logoColor=red"/>
</p>

![2024-02-21-18-19-10-Trim](https://github.com/htkim97/simply_Scheduler/assets/52130444/8bc868a5-6e40-4f57-a02b-1abcd2c78938)

<br/>


## 개요

- 개발 환경 : visual code
- 기술 스택 : TypeScript, JavaScript, Tailwind, Sass, NextJS
- 외부 자원 : Radix UI, Radix Icon

<br/>
<br/>

## 컴포넌트 구조
<img width="152" alt="image" src="https://github.com/htkim97/Hyeontae_portfolio/assets/52130444/efcfcb34-6fd7-420f-a6e5-df1be2f46168">

<br/>
<br/>


## 주요 기능


### useState 훅을 사용하여 상태 변수들을 선언하고 초기값을 할당

```typescript
const [todos, setTodos] = useState<string[]>([]); // 최종 출력 todo
  const [newTodo, setNewTodo] = useState('');
  const [isCheckedList, setIsCheckedList] = useState<boolean[]>([]); // 각 todo의 체크 상태

```
<br/>

### 새로운 할 일을 추가하는 함수

```typescript
  
  const addTodo = () => {
    if (newTodo.trim() !== '') {
      const updatedTodos = [...todos, newTodo];
      setTodos(updatedTodos);
      localStorage.setItem('todos', JSON.stringify(updatedTodos));
      setNewTodo('');
    }
  }
```

<br/>

### 특정 인덱스의 할 일을 제거하는 함수

```typescript
const removeTodo = (index: number) => {
    const updatedTodos = [...todos];
    const updatedIsCheckedList = [...isCheckedList];
    updatedTodos.splice(index, 1);
    updatedIsCheckedList.splice(index, 1);
    setIsCheckedList(updatedIsCheckedList);
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos)); // 삭제 후 localStorage 업데이트
  }
```
<br/>

