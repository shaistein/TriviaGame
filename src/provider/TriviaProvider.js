// import axios from "axios";
// const TriviaProvider = () => {

//     const getQuestions =  (prop) => {
//         useEffect(() => {
//         async function fetchData() {
//                const request = await axios.get('https://opentdb.com/api.php?amount=10')
//                con
//            }
//         }, []);
//         let result = null;
//         try{
//             const response = axios.get('https://opentdb.com/api.php?amount=10').then(res => {
//                 result = res.data.results;
//                 console.log(result);
//                 props.set(result);
//             });
//         } catch (err) {
//             if (err.response) {
//                 console.log(err.response.data);
//                 console.log(err.response.status);
//                 console.log(err.response.data);
//             } else {
//                 console.log(`Error: ${err.message}`);
//             }
//         }
//     }       
//     return {
//         get: getQuestions(),
//     }
// }

// export default TriviaProvider;