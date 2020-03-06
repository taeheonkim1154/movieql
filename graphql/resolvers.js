// Query를 해결하는 파일. Query는 DB에 문제를 제기하는 거기 때문에, 그 Query에 대해 적절한 해결(응답)이 있어야 함!

const taeheon = {
    name: "Taeheon",
    age: 24,
    gender: "male"
}

const resolvers = {
    Query : {
        // person이라는 type에 대해서 지정한 함수처럼 처리하겠다.
        person: () => taeheon
    }
};

export default resolvers