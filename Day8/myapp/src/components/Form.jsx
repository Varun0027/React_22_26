// import React, { useRef } from 'react';

// export default function Form() {
//     const emailInputRef = useRef(null);
//     const passwordInputRef = useRef(null);
//     const ageInputRef = useRef(null);

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const formData = {
//             email: emailInputRef.current.value,
//             password: passwordInputRef.current.value,
//             age: ageInputRef.current.value,
//         };
//         console.log(formData);
//         emailInputRef.current.value = '';
//         passwordInputRef.current.value = '';
//         ageInputRef.current.value = '';
//         emailInputRef.current.focus();
//     };

//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <input type='email' id='email' ref={emailInputRef} />
//                 <input type='password' id='password' ref={passwordInputRef} />
//                 <input type='number' id='age' ref={ageInputRef} />

//                 <input type='submit' value='Login' />
//             </form>
//         </div>
//     );
// }
