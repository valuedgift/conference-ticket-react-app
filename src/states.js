// function App() {
//   const [step, setStep] = useState(1);
//   const [avatar, setAvatar] = useState(localStorage.getItem("avatar") || "");
//   const [name, setName] = useState(localStorage.getItem("name") || "");
//   const [email, setEmail] = useState(localStorage.getItem("email") || "");
//   const [errors, setErrors] = useState({});
//   const [ticketGenerated, setTicketGenerated] = useState(false);

//   const handleNextStep = () => {
//       if (step < 1 || step > 3) {
//           throw new Error("invalid step: step " + step);
//       }
//       setStep(step => step + 1)
//   }

//   const handleCancelStep = () => {
//       // implementation...
//       setStep(1)
//   }

//   return (<>
//       { step == 1 ?
//           <div></div>
//           : null
//       }
//       {step == 2 ?
//           <div>
//               {avatar}
//           </div>
//           : null
//       }
//       {step == 3 ?
//           <div>{avatar}</div>
//           : null
//       }
//   </> );
// }