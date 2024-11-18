import "./App.css";
import { Component, useState, createRef } from "react";
import { useRef, useEffect } from "react";

// //                <=======   1st question with functional components   =======>

function App() {
  const [inputFields, setInputFields] = useState([
    {
      id: 0,
      companyname: "",
      jobtitle: "",
      errorinname: false,
      errorinjob: false,
      msg: "",
    },
  ]);

  const handleCompanyChange = (index, event) => {
    const values = [...inputFields];
    console.log(values);
    values[index].companyname = event.target.value;
    values[index].errorinname = false;

    setInputFields(values);
  };
  const handleJobtitleChange = (index, event) => {
    const values = [...inputFields];
    console.log(values);
    values[index].jobtitle = event.target.value;
    values[index].errorinjob = false;

    setInputFields(values);
  };
  const handleDelete = (index) => {
    setInputFields((pre) => pre.filter((element, i) => i !== index));
  };
  const handleClick = () => {
    const isCompanyNameValid = inputFields.every((inputField) => {
      return inputField.companyname !== "" && inputField.jobtitle !== "";
    });
    if (isCompanyNameValid) {
      setInputFields([
        ...inputFields,
        {
          id: inputFields.length,
          companyname: "",
          jobtitle: "",
          errorinname: false,
          errorinjob: false,
          msg: "",
        },
      ]);
    } else {
      setInputFields(
        inputFields.map((inputField) => {
          if (inputField.companyname === "" && inputField.jobtitle === "") {
            console.log("Company empty");
            return {
              ...inputField,
              errorinname: true,
              errorinjob: true,
              msg: "please fill two fields",
            };
          }
          if (inputField.companyname === "") {
            console.log("Company name is empty");
            return {
              ...inputField,
              errorinname: true,
              msg: "please fill company name",
            };
          }
          if (inputField.jobtitle === "") {
            console.log("Job title is empty");
            return {
              ...inputField,
              errorinjob: true,
              msg: "please fill job title",
            };
          }
          return inputField;
        })
      );

      setTimeout(() => {
        setInputFields((prev) =>
          prev.map((inputField) => ({
            ...inputField,
            msg: "",
          }))
        );
      }, 3000);
    }
  };

  return (
    <div>
      {inputFields.map((inputField, index) => (
        <div key={inputField.id}>
          <input
            type="text"
            placeholder="Enter Company Name"
            onChange={(event) => handleCompanyChange(index, event)}
            value={inputField.companyname}
            className={inputField.errorinname ? "errorName" : ""}
          />
          <input
            type="text"
            placeholder="Enter Job Name"
            onChange={(event) => handleJobtitleChange(index, event)}
            value={inputField.jobtitle}
            className={inputField.errorinjob ? "errorName" : ""}
          />
          <p>{inputField.msg}</p>
          <button onClick={() => handleDelete(index)}>Delete</button>
        </div>
      ))}
      <button onClick={handleClick}>ADD</button>
    </div>
  );
}

export default App;

// //                <=======   1st question with class components   =======>

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       inputFields: [
//         {
//           id: 0,
//           companyname: "",
//           jobtitle: "",
//           errorinname: false,
//           errorinjob: false,
//           msg: "",
//         },
//       ],
//     };
//   }

//   handleCompanyChange = (index, event) => {
//     const { inputFields } = this.state;
//     const values = [...inputFields];
//     values[index].companyname = event.target.value;
//     values[index].errorinname = false;
//     this.setState(values);
//   };
//   handleJobtitleChange = (index, event) => {
//     const { inputFields } = this.state;
//     const values = [...inputFields];
//     values[index].jobtitle = event.target.value;
//     values[index].errorinjob = false;
//     this.setState(values);
//   };
//   handleClick = () => {
//     const { inputFields } = this.state;
//     const isCompanyNameValid = inputFields.every((inputField) => {
//       return inputField.companyname !== "";
//     });
//     const isJobtitleValid = inputFields.every((inputField) => {
//       return inputField.jobtitle !== "";
//     });
//     if (isCompanyNameValid && isJobtitleValid) {
//       this.setState({
//         inputFields: [
//           ...inputFields,
//           {
//             id: inputFields.length,
//             companyname: "",
//             jobtitle: "",
//             errorinname: false,
//             errorinjob: false,
//           },
//         ],
//       });
//     } else {
//       console.log("ELSE");
//       const updatedInputFields = inputFields.map((inputField) => {
//         if (inputField.companyname === "" && inputField.jobtitle === "") {
//           console.log("Company empty");
//           return {
//             ...inputField,
//             errorinname: true,
//             errorinjob: true,
//             msg: "please fill two fields",
//           };
//         }
//         if (inputField.companyname === "") {
//           console.log("Company name is empty");
//           return {
//             ...inputField,
//             errorinname: true,
//             msg: "please fill company name",
//           };
//         }
//         if (inputField.jobtitle === "") {
//           console.log("Job title is empty");
//           return {
//             ...inputField,
//             errorinjob: true,
//             msg: "please fill job title",
//           };
//         }
//         return inputField;
//       });
//       this.setState({
//         inputFields: updatedInputFields,
//       });
//       setTimeout(() => {
//         const clearedFields = updatedInputFields.map((inputField) => ({
//           ...inputField,
//           msg: "",
//         }));

//         this.setState({
//           inputFields: clearedFields,
//         });

//         console.log("Fields reset after timer:", clearedFields);
//       }, 3000);
//     }
//   };

//   render() {
//     const { inputFields } = this.state;
//     // console.log(inputFields);
//     return (
//       <div>
//         {inputFields.map((inputField, index) => (
//           <div key={inputField.id}>
//             <input
//               type="text"
//               placeholder="Enter Company Name"
//               onChange={(event) => this.handleCompanyChange(index, event)}
//               value={inputField.companyname}
//               className={inputField.errorinname ? "errorName" : ""}
//             />
//             <input
//               type="text"
//               placeholder="Enter Job Name"
//               onChange={(event) => this.handleJobtitleChange(index, event)}
//               value={inputField.jobtitle}
//               className={inputField.errorinjob ? "errorName" : ""}
//             />
//             <p>{inputField.msg}</p>
//           </div>
//         ))}
//         <button onClick={this.handleClick}>ADD</button>
//       </div>
//     );
//   }
// }
// export default App;

// // <=======   2nd question with functional components   =======>

// // import { useState, useRef, useEffect } from "react";

// // function App() {
// //   const [email, setEmail] = useState("");
// //   const [name, setName] = useState("");
// //   const [feedback, setFeedback] = useState("");
// //   const [nameError, setNameError] = useState(false);
// //   const [emailError, setEmailError] = useState(false);
// //   const [msg, setMsg] = useState("");

// //   const handleNameInput = (event) => {
// //     setName(event.target.value);
// //   };

// //   const handleEmailInput = (event) => {
// //     setEmail(event.target.value);
// //   };

// //   const handleFeedbackInput = (event) => {
// //     setFeedback(event.target.value);
// //   };

// // const handleSubmit = () => {
// //   let isNameValid = true;
// //   let isEmailValid = true;

// //   if (name.length < 5) {
// //     setNameError(true);
// //     isNameValid = false;
// //   } else {
// //     setNameError(false);
// //   }

// //   if (email.endsWith("@gmail.com")) {
// //     setEmailError(false);
// //   } else {
// //     setEmailError(true);
// //     isEmailValid = false;
// //   }

// //   if (isNameValid && isEmailValid) {
// //     setMsg(`Thank you ${name} for your feedback`);
// //     setTimeout(() => {
// //       setMsg("");
// //       setName("");
// //       setEmail("");
// //       setFeedback("");
// //     }, 3000);
// //   } else {
// //     setMsg(`Please fill out all fields or enter a valid email`);
// setTimeout(() => {
//   setMsg("");
// }, 3000);
// }
// // };

// //   return (
// //     <>
// //       <form>
// //         <label>First name:</label>
// //         <input
// //           type="text"
// //           id="fname"
// //           className={nameError ? "error" : ""}
// //           onChange={handleNameInput}
// //           name="fname"
// //           value={name}
// //           placeholder="Enter your name"
// //         />
// //         <label>Email:</label>
// //         <input
// //           type="text"
// //           id="email"
// //           className={emailError ? "error" : ""}
// //           onChange={handleEmailInput}
// //           name="email"
// //           value={email}
// //           placeholder="Enter your email"
// //         />
// //         <label>Feedback:</label>
// //         <input
// //           type="text"
// //           id="feedback"
// //           onChange={handleFeedbackInput}
// //           name="feedback"
// //           value={feedback}
// //           placeholder="Enter your feedback"
// //         />
// //       </form>

// //       <p>{msg}</p>

// //       <button onClick={handleSubmit}>Submit</button>
// //     </>
// //   );
// // }

// // export default App;

// // <=======   2nd question with class components   =======>

// // import { Component } from "react";
// // import "./App.css";

// // class App extends Component {
// //   constructor() {
// //     super();
// //     this.state = {
// //       name: "",
// //       email: "",
// //       feedback: "",
// //       nameError: false,
// //       emailError: false,
// //       msg: "",
// //     };
// //   }
// //   handleNameInput = (event) => {
// //     this.setState({ name: event.target.value, nameError: false, msg: "" });
// //   };

// //   handleEmailInput = (event) => {
// //     this.setState({ email: event.target.value, emailError: false, msg: "" });
// //   };

// //   handleFeedbackInput = (event) => {
// //     this.setState({ feedback: event.target.value, msg: "" });
// //   };
// //   handleSubmit = () => {
// //     let isNameValid = true;
// //     let isEmailValid = true;
// //     const { name, email } = this.state;
// //     if (name.length < 5) {
// //       this.setState({ nameError: true, msg: "" });
// //       isNameValid = false;
// //     } else {
// //       this.setState({ nameError: false, msg: "" });
// //     }

// //     if (email.endsWith("@gmail.com")) {
// //       this.setState({ emailError: false, msg: "" });
// //       // setEmailError(false);
// //     } else {
// //       this.setState({ emailError: true, msg: "" });
// //       // setEmailError(true);
// //       isEmailValid = false;
// //     }

// //     if (isNameValid && isEmailValid) {
// //       this.setState({ msg: `Thank you ${name} for your feedback` });
// //       setTimeout(() => {
// //         this.setState({ name: "", email: "", feedback: "", msg: "" });
// //       }, 3000);
// //     } else {
// //       this.setState({
// //         msg: `Please fill out all fields or enter a valid email`,
// //       });

// //       setTimeout(() => {
// //         this.setState({ msg: "" });
// //       }, 3000);
// //     }
// //   };

// //   render() {
// //     const { name, email, feedback, nameError, emailError, msg } = this.state;
// //     return (
// //       <>
// //         <form>
// //           <label>First name:</label>
// //           <input
// //             type="text"
// //             id="fname"
// //             className={nameError ? "errorName" : ""}
// //             onChange={this.handleNameInput}
// //             name="fname"
// //             value={name}
// //             placeholder="Enter your name"
// //           />
// //           <label>Email:</label>
// //           <input
// //             type="text"
// //             id="email"
// //             className={emailError ? "errorName" : ""}
// //             onChange={this.handleEmailInput}
// //             name="email"
// //             value={email}
// //             placeholder="Enter your email"
// //           />
// //           <label>Feedback:</label>
// <input
//   type="text"
//   id="feedback"
//   onChange={this.handleFeedbackInput}
//   name="feedback"
//   value={feedback}
//   placeholder="Enter your feedback"
// />
// //         </form>

// //         <p>{msg}</p>

// //         <button onClick={this.handleSubmit}>Submit</button>
// //       </>
// //     );
// //   }
// // }

// // export default App;

// // <=======   3rd question with functional components   =======>

// // import React, { useState, useRef, useEffect } from "react";

// // function App() {
// //   const [num, setNum] = useState(0);
// //   const [count, setCount] = useState(0);
//

// //   useEffect(() => {
// //     if (num === 11) {
// //       clearInterval(intervalRef.current);
// //       setNum(0);
// //       setCount(0);
// //     }
// //   }, [num]);

// //   const handleIncrease = () => {
// //     setCount((prevCount) => prevCount + 1);

// //     clearInterval(intervalRef.current);
// //     setNum(0);

// //     intervalRef.current = setInterval(() => {
// //       setNum((prevNum) => prevNum + 1);
// //     }, 1000);
// //   };

// //   const handleDecrease = () => {
// //     if (count > 0) {
// //       setCount((prevCount) => prevCount - 1);

// //       clearInterval(intervalRef.current);
// //       setNum(0);
// //       intervalRef.current = setInterval(() => {
// //         setNum((prevNum) => prevNum + 1);
// //       }, 1000);
// //     }
// //   };

// //   return (
// //     <>
// //       <div className="counter">
// //         <div className="innerCounter">
// //           <h1>{count}</h1>
// //           <button onClick={handleIncrease}>+</button>
// //           <button onClick={handleDecrease}>-</button>
// //           <p>{`The count will reset to zero in ${num} seconds`}</p>
// //         </div>
// //       </div>
// //     </>
// //   );
// // }

// // export default App;

// // <=======   3rd question with class components   =======>

// // import React, { Component, createRef } from "react";

// class App extends Component {
//   inputRef = createRef();
//   state = {
//     num: 0,
//     count: 0,
//   };
//   componentDidUpdate() {
//     const { inputRef } = this;
//     const { num } = this.state;

//     if (num === 11) {
//       clearInterval(inputRef.current);
//       this.setState({ num: 0, count: 0 });
//     }
//   }
//   handleIncrease = () => {
//     const { inputRef } = this;
// this.setState((prevState) => ({
//   ...prevState,
//   count: prevState.count + 1,
// }));
//     clearInterval(inputRef.current);
//     this.setState({ num: 0 });
// //     inputRef.current = setInterval(() => {
// //       this.setState((prevState) => ({
// //         ...prevState,
// //         num: prevState.num + 1,
// //       }));
// //     }, 1000);
// //   };

// //   handleDecrease = () => {
// //     const { inputRef } = this;
// //     if (this.state.count > 0) {
// //       this.setState((prevState) => ({
// //         ...prevState,
// //         count: prevState.count - 1,
// //       }));
// //       this.setState({ num: 0 });
// //       clearInterval(inputRef.current);
// //       inputRef.current = setInterval(() => {
// //         this.setState((prevState) => ({
// //           ...prevState,
// //           num: prevState.num + 1,
// //         }));
// //       }, 1000);
// //     }
// //   };

// //   render() {
// //     const { num, count } = this.state;
// //     const { handleIncrease, handleDecrease } = this;
// //     return (
// //       <>
// //         <div className="counter">
// //           <div className="innerCounter">
// //             <h1>{count}</h1>
// //             <button onClick={handleIncrease}>+</button>
// //             <button onClick={handleDecrease}>-</button>
// //             <p>{`The count will reset to zero in ${num} seconds`}</p>
// //           </div>
// //         </div>
// //       </>
// //     );
// //   }
// // }
// // export default App;

// //             <=======   4th question with functional components   =======>

// import React, { useState, useEffect, useRef } from "react";

// export default function App() {
//   const [text, setText] = useState("");
//   const [title, setTitle] = useState("");
//   const [elements, setElements] = useState(() => {
// const savedElements = localStorage.getItem("elements");
// return savedElements ? JSON.parse(savedElements) : [];
//   });
//   const [status, setStatus] = useState("added");
//   const [error, setError] = useState(false);
//   const intervalRef = useRef(null);
//   const [idInc, setId] = useState(0);

// useEffect(() => {
//   localStorage.setItem("elements", JSON.stringify(elements));
// }, [elements]);

//   const handleTitleInput = (event) => {
//     setTitle(event.target.value);
//   };

//   const handleAdd = () => {
//     clearTimeout(intervalRef.current);
//     console.log(status);
// if (status === "edit" && title !== "") {
//   const updatedElements = elements.map((element) => {
//     if (element.id === idInc) {
//       setStatus("added");
//       return {
//         ...element,
//         id: idInc,
//         title: title,
//         text: text,
//         statusof: "added",
//       };
//     }
//     return element;
//   });

//   setElements(updatedElements);
//   setTitle("");
//   setText("");
// }
// else if (status === "added" && title !== "") {
//       setElements([
//         ...elements,
//         { id: idInc, title: title, text: text, statusof: "added" },
//       ]);
//       setTitle("");
//       setText("");
//       setId(idInc + 1);
//     } else if (title === "") {
//       setError(true);
//     }
//     intervalRef.current = setTimeout(() => {
//       setError(false);
//     }, 3000);
//   };

//   const handleElements = (id) => {
//     setElements((prev) => prev.filter((element) => element.id !== id));
//   };

// const handleEditElements = (id) => {
//   setId(id);
//   setStatus("edit");
//   const mappedElements = elements.map((element) => {
//     if (id === element.id) {
//       setText(element.text);
//       setTitle(element.title);
//       return { ...element, statusof: "edit" };
//     } else {
//       return { ...element, statusof: "added" };
//     }
//   });

//   setElements(mappedElements);
// };

//   return (
//     <>
//       <div className="container">
//         <h1>Create or Edit your note</h1>
//         <input
//           className="titleInput"
//           type="text"
//           id="feedback"
//           onChange={handleTitleInput}
//           name="feedback"
//           value={title}
//           placeholder="Enter your Title"
//         />
//         <textarea
//           maxLength="200"
//           onChange={(e) => setText(e.target.value)}
//           value={text}
//           placeholder="Enter your Description (max 200 characters)"
//         ></textarea>
//         <p className="errorintitle">{error ? "*Please Enter Title" : ""}</p>
//         <button onClick={handleAdd}>
//           {status === "edit" ? "Edit" : "Add"}
//         </button>
//       </div>
//       <div className="inner-container">
//         {elements.map((element) => {
//           return (
//             <div className="container-1" key={element.id}>
//               <h1>{element.title}</h1>
//               <p>{element.text}</p>
//               <div className="buttons">
//                 <button
//                   disabled={element.statusof === "edit"}
//                   onClick={() => handleEditElements(element.id)}
//                 >
//                   Edit
//                 </button>
//                 <button
//                   disabled={element.statusof === "edit"}
//                   onClick={() => handleElements(element.id)}
//                 >
//                   Delete
//                 </button>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
// }

// save the notes to local storage whenever they are added, edited, or deleted,
// and load the notes from local storage when the component mounts.

// //             <=======   4th question with class components   =======>

// class App extends Component {
//   intervalRef = null;
//   constructor(props) {
//     super(props);
//     const savedElements = JSON.parse(localStorage.getItem("elements")) || [];
//     this.state = {
//       text: "",
//       title: "",
//       idInc:
//         savedElements.length > 0
//           ? savedElements[savedElements.length - 1].id + 1
//           : 1,
//       elements: savedElements,
//       status: "added",
//       error: false,
//     };
//   }
//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.elements !== this.state.elements) {
//       localStorage.setItem("elements", JSON.stringify(this.state.elements));
//     }
//   }

//   handleTitleInput = (event) => {
//     this.setState({ title: event.target.value });
//   };

//   handleAdd = () => {
//     clearTimeout(this.intervalRef);

//     const { title, text, idInc, elements, status } = this.state;

//     if (status === "edit" && title !== "") {
//       const updatedElements = elements.map((element) => {
//         if (element.id === idInc) {
//           return {
//             ...element,
//             title: title,
//             text: text,
//           };
//         }
//         return element;
//       });

//       this.setState({
//         title: "",
//         text: "",
//         elements: updatedElements,
//         status: "added",
//         error: false,
//       });
//     } else if (status === "added" && title !== "") {
//       this.setState({
//         elements: [
//           ...elements,
//           { id: idInc, title: title, text: text, statusof: "added" },
//         ],
//         title: "",
//         text: "",
//         idInc: idInc + 1,
//         error: false,
//       });
//       console.log(elements);
//     } else if (title === "") {
//       this.setState({ error: true });
//     }

//     this.intervalRef = setTimeout(() => {
//       this.setState({ error: false });
//     }, 3000);
//   };

//   handleElements = (id) => {
//     this.setState((prevState) => ({
//       elements: prevState.elements.filter((element) => id !== element.id),
//     }));
//   };

//   handleEditElements = (id) => {
//     const element = this.state.elements.find((el) => el.id === id);
//     if (element) {
//       this.setState({
//         title: element.title,
//         text: element.text,
//         idInc: id,
//         status: "edit",
//       });
//     }
//   };

//   render() {
//     const { text, title, elements, idInc, status, error } = this.state;

//     return (
//       <>
//         <div className="container">
//           <h1>{`${status === "edit" ? "Edit" : "Create"} your note`}</h1>
//           <input
//             className="titleInput"
//             type="text"
//             onChange={this.handleTitleInput}
//             value={title}
//             placeholder="Enter your Title"
//           />
//           <textarea
//             maxLength="200"
//             onChange={(e) => this.setState({ text: e.target.value })}
//             value={text}
//             placeholder="Enter your Description (max 200 characters)"
//           ></textarea>
//           <p className="errorintitle">{error ? "*Please Enter Title" : ""}</p>
//           <button onClick={this.handleAdd}>
//             {status === "edit" ? "Edit" : "Add"}
//           </button>
//         </div>
//         <div className="inner-container">
//           {elements.map((element) => (
//             <div className="container-1" key={element.id} id={element.id}>
//               <h1>{element.title}</h1>
//               <p>{element.text}</p>
//               <div className="buttons">
//                 <button
//                   disabled={status === "edit" && idInc === element.id}
//                   onClick={() => this.handleEditElements(element.id)}
//                 >
//                   Edit
//                 </button>
//                 <button
//                   disabled={status === "edit" && idInc === element.id}
//                   onClick={() => this.handleElements(element.id)}
//                 >
//                   Delete
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </>
//     );
//   }
// }

// export default App;

// //             <=======   5th question with functional components   =======>

// export default function App() {
//   const [createOptions, setCreateOptions] = useState(() => {
//     const savedCreateOptions = localStorage.getItem("createOptions");
//     return savedCreateOptions
//       ? JSON.parse(savedCreateOptions)
//       : {
//           option1: "Option A",
//           option2: "Option B",
//           option3: "Option C",
//         };
//   });

//   const [tempOptions, setTempOptions] = useState({ ...createOptions });
//   const [create, setCreate] = useState(false);

//   const [options, setOptions] = useState(() => {
//     const savedOptions = localStorage.getItem("pollOptions");
//     return savedOptions
//       ? JSON.parse(savedOptions)
//       : [
//           { option1count: 0, percentage: 0 },
//           { option2count: 0, percentage: 0 },
//           { option3count: 0, percentage: 0 },
//         ];
//   });

//   const [total, setTotal] = useState(() => {
//     const savedTotal = localStorage.getItem("totalVotes");
//     return savedTotal ? JSON.parse(savedTotal) : 0;
//   });

//   const [selectedOption, setSelectedOption] = useState("");
//   const [hasVoted, setHasVoted] = useState(false);

//   // Save updated vote counts to local storage whenever options or total changes
//   useEffect(() => {
//     localStorage.setItem("pollOptions", JSON.stringify(options));
//     localStorage.setItem("totalVotes", JSON.stringify(total));
//     localStorage.setItem("createOptions", JSON.stringify(createOptions));
//     // localStorage.setItem("voted", JSON.stringify(hasVoted));
//   }, [options, total, createOptions, hasVoted]);

//   const handleSubmit = () => {
//     if (!selectedOption || hasVoted) return; // Prevent vote if no option is selected or if already voted

//     const newTotal = total + 1;
//     setTotal(newTotal);
//     setHasVoted(true); // Prevent further voting

//     const updatedOptions = options.map((element, index) => {
//       const optionKey = `option${index + 1}count`;
//       if (selectedOption === `option${index + 1}`) {
//         const newValue = element[optionKey] + 1;
//         return {
//           ...element,
//           [optionKey]: newValue,
//           percentage: (newValue / newTotal) * 100,
//         };
//       }
//       return {
//         ...element,
//         percentage: (element[optionKey] / newTotal) * 100,
//       };
//     });

//     setOptions(updatedOptions);
//   };

//   const handleCreate = () => {
//     setCreateOptions(tempOptions);
//     if (create) {
//       setOptions([
//         { option1count: 0, percentage: 0 },
//         { option2count: 0, percentage: 0 },
//         { option3count: 0, percentage: 0 },
//       ]);
//       setTotal(0);
//     }
//     setCreate(true);
//     setHasVoted(false); // Reset vote status
//   };

//   return (
//     <>
//       <div>
//         <h1>Poll Application</h1>
//         <div className="options">
//           <label className="option">
//             <input
//               type="radio"
//               name="option"
//               value="option1"
//               onChange={() => setSelectedOption("option1")}
//               disabled={hasVoted} // Disable input if user has already voted
//             />
//             {createOptions.option1}
//           </label>
//           <label className="option">
//             <input
//               type="radio"
//               name="option"
//               value="option2"
//               onChange={() => setSelectedOption("option2")}
//               disabled={hasVoted}
//             />
//             {createOptions.option2}
//           </label>
//           <label className="option">
//             <input
//               type="radio"
//               name="option"
//               value="option3"
//               onChange={() => setSelectedOption("option3")}
//               disabled={hasVoted}
//             />
//             {createOptions.option3}
//           </label>
//         </div>

//         <button onClick={handleSubmit} disabled={hasVoted}>
//           Submit
//         </button>

//         <h1>Total Votes: {total}</h1>
//         {options.map((element, index) => {
//           const key = `option${index + 1}count`;
//           return (
//             <div key={index}>
//               <p>{`${
//                 createOptions[`option${index + 1}`]
//               } percentage is ${element.percentage.toFixed(2)}%`}</p>
//               <p>{`${createOptions[`option${index + 1}`]} votes are ${
//                 element[key]
//               }`}</p>
//             </div>
//           );
//         })}

//         {create && (
//           <>
//             <h2>Create a new Poll</h2>
//             <input
//               value={tempOptions.option1}
//               onChange={(e) =>
//                 setTempOptions({ ...tempOptions, option1: e.target.value })
//               }
//               placeholder="Enter Option 1"
//             />
//             <input
//               value={tempOptions.option2}
//               onChange={(e) =>
//                 setTempOptions({ ...tempOptions, option2: e.target.value })
//               }
//               placeholder="Enter Option 2"
//             />
//             <input
//               value={tempOptions.option3}
//               onChange={(e) =>
//                 setTempOptions({ ...tempOptions, option3: e.target.value })
//               }
//               placeholder="Enter Option 3"
//             />
//           </>
//         )}
//         <button onClick={handleCreate}>Create Poll</button>
//       </div>
//     </>
//   );
// }

// export default function App() {
//   const [details, setDetails] = useState([
//     [{ Name: "" }, { email: "" }],
//     [{ street: "" }, { city: "" }, { zipcode: "" }],
//   ]);
//   const [cardNumToShow, setCardNumToShow] = useState(0);
//   function handlechange(key, event, index) {
//     setDetails((pre) => {
//       pre[cardNumToShow][index][key] = event.target.value;
//     });
//   }

//   function CardsToSee() {
//     return (
//       <div>
//         {details[cardNumToShow].map((object, index) => (
//           <div key={index}>
//             {Object.entries(object).map(([key, value]) => (
//               <div key={key}>
//                 {/* <strong>{key}:</strong> {value} */}
//                 <input
//                   placeholder={key}
//                   value={value}
//                   onChange={(e) => handlechange(key, e, index)}
//                 />
//               </div>
//             ))}
//           </div>
//         ))}
//       </div>
//     );
//   }

//   return (
//     <div>
//       <CardsToSee />
//       <button onClick={() => setCardNumToShow(cardNumToShow + 1)}>
//         Show Card 1
//       </button>
//       <button onClick={() => setCardNumToShow(cardNumToShow - 1)}>Back</button>
//     </div>
//   );
// }

// export default function App() {
//   const [details, setDetails] = useState([
//     [{ Name: "" }, { email: "" }],
//     [{ street: "" }, { city: "" }, { zipcode: "" }],
//   ]);
//   const [cardNumToShow, setCardNumToShow] = useState(0);

//   function handleChange(key, event, index) {
//     setDetails((prevDetails) => {
//       const updatedDetails = [...prevDetails];
//       prevDetails[cardNumToShow][index][key] = event.target.value;
//       return updatedDetails;
//     });
//   }

//   function CardsToSee() {
//     // Deep copy the details array
//     const updatedArray = details.map((card) =>
//       card.map((object) => ({ ...object }))
//     );

//     return (
//       <div>
//         {updatedArray[cardNumToShow].map((object, index) => (
//           <div key={index}>
//             {Object.entries(object).map(([key, value]) => (
//               <div key={key}>
//                 <input
//                   placeholder={key}
//                   value={value}
//                   onChange={(e) => handleChange(key, e, index)}
//                 />
//               </div>
//             ))}
//           </div>
//         ))}
//       </div>
//     );
//   }

//   const handleNextCard = () => {
//     if (cardNumToShow < details.length - 1) {
//       setCardNumToShow(cardNumToShow + 1);
//     }
//   };

//   const handlePrevCard = () => {
//     if (cardNumToShow > 0) {
//       setCardNumToShow(cardNumToShow - 1);
//     }
//   };

//   return (
//     <div>
//       <CardsToSee />
//       <button onClick={handlePrevCard} disabled={cardNumToShow === 0}>
//         Back
//       </button>
//       <button
//         onClick={handleNextCard}
//         disabled={cardNumToShow >= details.length - 1}
//       >
//         Next
//       </button>
//     </div>
//   );
// }

// import { useMemo } from "react";

// export default function App() {
//   const [details, setDetails] = useState([
//     [{ Name: "" }, { email: "" }],
//     [{ street: "" }, { city: "" }, { zipcode: "" }],
//   ]);
//   const [cardNumToShow, setCardNumToShow] = useState(0);

//   function handleChange(key, event, index) {
//     setDetails((prevDetails) => {
//       const updatedDetails = [...prevDetails];
//       prevDetails[cardNumToShow][index][key] = event.target.value;
//       return updatedDetails;
//     });
//   }

//   const CardsToSee = useMemo(() => {
//     // Deep copy the details array
//     const updatedArray = details.map((card) =>
//       card.map((object) => ({ ...object }))
//     );
//     return (
//       <div>
//         {updatedArray[cardNumToShow].map((object, index) => (
//           <div key={index}>
//             {Object.entries(object).map(([key, value]) => (
//               <div key={key}>
//                 <input
//                   placeholder={key}
//                   value={value}
//                   onChange={(e) => handleChange(key, e, index)}
//                 />
//               </div>
//             ))}
//           </div>
//         ))}
//       </div>
//     );
//   }, [details, cardNumToShow]);

//   const handleNextCard = () => {
//     if (cardNumToShow < details.length - 1) {
//       setCardNumToShow(cardNumToShow + 1);
//     }
//   };

//   const handlePrevCard = () => {
//     if (cardNumToShow > 0) {
//       setCardNumToShow(cardNumToShow - 1);
//     }
//   };

//   return (
//     <div>
//       {CardsToSee}
//       <button onClick={handlePrevCard} disabled={cardNumToShow === 0}>
//         Back
//       </button>
//       <button
//         onClick={handleNextCard}
//         disabled={cardNumToShow >= details.length - 1}
//       >
//         Next
//       </button>
//     </div>
//   );
// }

// export default function App() {
//   const [details, setDetails] = useState([
//     [{ Name: "" }, { email: "" }],
//     [{ street: "" }, { city: "" }, { zipcode: "" }],
//   ]);
//   const arrayref = useRef(details);
//   const [cardNumToShow, setCardNumToShow] = useState(0);
//   useEffect(() => {
//     arrayref.current = details;
//   }, [arrayref.current]);
//   function handleChange(key, event, index) {
//     arrayref.current[cardNumToShow][index][key] = event.target.value;
//     // setDetails(arrayref);
// console.log(arrayref);
// console.log(details);
//   }

//   function CardsToSee() {
//     return (
//       <div>
//         {arrayref.current[cardNumToShow].map((object, index) => (
//           <div key={index}>
//             {Object.entries(object).map(([key, value]) => (
//               <div key={key}>
//                 <input
//                   placeholder={key}
//                   value={value}
//                   onChange={(e) => handleChange(key, e, index)}
//                 />
//               </div>
//             ))}
//           </div>
//         ))}
//       </div>
//     );
//   }

//   const handleNextCard = () => {
//     if (cardNumToShow < arrayref.current.length - 1) {
//       setCardNumToShow(cardNumToShow + 1);
//     }
//   };

//   const handlePrevCard = () => {
//     if (cardNumToShow > 0) {
//       setCardNumToShow(cardNumToShow - 1);
//     }
//   };

//   return (
//     <div>
//       <CardsToSee />
//       <button onClick={handlePrevCard} disabled={cardNumToShow === 0}>
//         Back
//       </button>
//       <button
//         onClick={handleNextCard}
//         disabled={cardNumToShow >= arrayref.current.length - 1}
//       >
//         Next
//       </button>
//     </div>
//   );
// }

// import { useState, useRef, useEffect } from "react";

// export default function App() {
//   const [details, setDetails] = useState([
//     [{ Name: "" }, { email: "" }],
//     [{ street: "" }, { city: "" }, { zipcode: "" }],
//   ]);
//   const arrayref = useRef(details);
//   const [cardNumToShow, setCardNumToShow] = useState(0);

//   // Sync arrayref with the latest details
//   useEffect(() => {
//     arrayref.current = details;
//   }, [arrayref.current]);

//   function handleChange(key, event, index) {
//     const updatedDetails = [...arrayref.current]; // Copy the current details
//     updatedDetails[cardNumToShow] = updatedDetails[cardNumToShow].map(
//       (item, i) => (i === index ? { ...item, [key]: event.target.value } : item)
//     );
//     setDetails(updatedDetails); // Update the state to trigger re-render
//     console.log(arrayref);
//     console.log(details);
//   }

//   console.log("parent2>>>>>>>>>>");

//   function CardsToSee() {
//     console.log("component>>>>>>>>>>");
//     return (
//       <div>
//         {details[cardNumToShow].map((object, index) => (
//           <div key={index}>
//             {Object.entries(object).map(([key, value]) => (
//               <div key={key}>
//                 <input
//                   placeholder={key}
//                   value={value}
//                   onChange={(e) => handleChange(key, e, index)}
//                 />
//               </div>
//             ))}
//           </div>
//         ))}
//       </div>
//     );
//   }

//   const handleNextCard = () => {
//     if (cardNumToShow < details.length - 1) {
//       setCardNumToShow(cardNumToShow + 1);
//     }
//   };

//   const handlePrevCard = () => {
//     if (cardNumToShow > 0) {
//       setCardNumToShow(cardNumToShow - 1);
//     }
//   };
//   console.log("parent1>>>>>>>>>>");

//   return (
//     <div>
//       <CardsToSee />

//       <button onClick={handlePrevCard} disabled={cardNumToShow === 0}>
//         Back
//       </button>
//       <button
//         onClick={handleNextCard}
//         disabled={cardNumToShow >= details.length - 1}
//       >
//         Next
//       </button>
//     </div>
//   );
// }

// import { useState } from "react";

// export default function App() {
//   const [step1, setStep1] = useState({ Name: "", email: "" });
//   const [step2, setStep2] = useState([
//     { street: "" },
//     { city: "" },
//     { zipcode: "" },
//   ]);

//   const handleChange = (e) => {

//     setStep1({ Name: e.target.value, email: step1.email });

//   };

//   function Tostep1() {
//     return (
//       <>
//         <input
//           placeholder="Name"
//           value={step1[0].Name}
//           onChange={(e) => handleChange(e)}
//         />
//       </>
//     );
//   }

//   return <Tostep1 />;
// }
// import { useState } from "react";

// export default function App() {
//   const [step1, setStep1] = useState([{ Name: "", email: "" }]);
//   const [step2, setStep2] = useState([
//     { street: "" },
//     { city: "" },
//     { zipcode: "" },
//   ]);

//   function handleChange(e) {
//     const updatedStep1 = [...step1];
//     updatedStep1[0].Name = e.target.value;
//     setStep1(updatedStep1);
//     console.log(step1);
//   }

//   return (
//     <>
//       <input
//         placeholder="Name"
//         value={step1[0].Name}
//         onChange={(e) => handleChange(e)}
//       />
//     </>
//   );
// }
