import React, { useState } from "react";
import SideNav from "./SideNav";
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

export default function Contact() {
	const [disabled, setDisabled] = useState(false);
	const [alertInfo, setAlertInfo] = useState({
	  display: false,
	  message: '',
	  type: '',
	});
	// Shows alert message for form submission feedback
	const toggleAlert = (message, type) => {
	  setAlertInfo({ display: true, message, type });
	
	  // Hide alert after 5 seconds
	  setTimeout(() => {
		setAlertInfo({ display: false, message: '', type: '' });
	  }, 5000);
	};

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors }
	  } = useForm();
	  
	  const onSubmit = async (data) => {
		const { name, email, subject, message } = data;
		try {
		// Disable form while processing submission
			setDisabled(true);
  		// Define template params
			const templateParams = {
			  name,
			  email,
			  subject,
			  message
			};
		// Use emailjs to email contact form data
			await emailjs.send(
			'service_herj5f9',
			'template_l72fvrl',
			templateParams,
			'lV1Qtv9udRKEMwUOa'
			);
		// Display success alert
			 toggleAlert('Form submission was successful!', 'success');
			} catch (e) {
			  console.error(e);
		// Display error alert
			  toggleAlert('Uh oh. Something went wrong.', 'danger');
			} finally {
		// Re-enable form submission
			setDisabled(false);
		// Reset contact form fields after submission
			reset();
		  }
	  };

	return (
		<>
        {/* The Upper Portion of the webpage */}
		<div id="header">
				<div id="greeting">
					<h1><b>Cont<span>ac</span><span>t M</span><span>e</span>⋆<span>*`</span></b></h1>
				</div>
				<div id="sidebar">
					<SideNav />
				</div>
		</div>

		<div className='contact'>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <div className='contactForm'>
				<h3>Contact Form</h3><h4>Freelance Available!!</h4>
              <form id='contact-form' onSubmit={handleSubmit(onSubmit)} noValidate>
                {/* Row 1 of form */}
                <div className='row formRow'>
                  <div className='col-6'>
                    <input
                      type='text'
                      name='name'
                      {...register('name', {
                        required: { value: true, message: 'Please enter your name' },
                        maxLength: {
                          value: 30,
                          message: 'Please use 30 characters or less'
                        }
                      })}
                      className='form-control formInput'
                      placeholder='Name'
                    ></input>
                    {errors.name && <span className='errorMessage'>{errors.name.message}</span>}
                  </div><br />
                  <div className='col-6'>
                    <input
                      type='email'
                      name='email'
                      {...register('email', {
                        required: true,
                        pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                      })}
                      className='form-control formInput'
                      placeholder='Email address'
                    ></input>
                    {errors.email && (
                      <span className='errorMessage'>Please enter a valid email address</span>
                    )}
                  </div>
                </div><br />
                {/* Row 2 of form */}
                <div className='row formRow'>
                  <div className='col'>
                    <input
                      type='text'
                      name='subject'
                      {...register('subject', {
                        required: { value: true, message: 'Please enter a subject' },
                        maxLength: {
                          value: 75,
                          message: 'Subject cannot exceed 75 characters'
                        }
                      })}
                      className='form-control formInput'
                      placeholder='Subject'
                    ></input>
                    {errors.subject && (
                      <span className='errorMessage'>{errors.subject.message}</span>
                    )}
                  </div>
                </div><br />
                {/* Row 3 of form */}
                <div className='row formRow'>
                  <div className='col'>
                    <textarea
                      rows={3}
                      name='message'
                      {...register('message', {
                        required: true
                      })}
                      className='form-control formInput'
                      placeholder='Message'
                    ></textarea>
                    {errors.message && <span className='errorMessage'>Please enter a message</span>}
                  </div>
                </div>
               <button className='contact-button' type='submit'>
                  Submit
                </button>
              </form> 
            </div>
			{/* Photo of me next to the contact form */}
	<div id='contact-photo'>
<img src="/contact-lani.png" alt="Xolani on another galaxy background featuring some planets"  style={{ height: "60vh" }} />
	</div>
          </div>
        </div>
      </div>
	  {alertInfo.display && (
		<div
		  className={`alert alert-${alertInfo.type} alert-dismissible mt-5`}
		  role='alert'
		>
		  {alertInfo.message}
		  <button
			type='button'
			className='btn-close'
			data-bs-dismiss='alert'
			aria-label='Close'
			onClick={() =>
			  setAlertInfo({ display: false, message: '', type: '' })
			} // Clear the alert when close button is clicked
		  ></button>
		</div>
	  )}
    </div>

	<div>
		<footer>
			Email: <br />
			xolani.victory@gmail.com<br />
			Phone #:<br />
			+1(209)425-5090 <br />
			<p style={{ textAlign: "left" }}>
                    <a href="http://www.linkedin.com/in/xolanivictory">
                        <img src="/linkedin.png" style={{ height: "30px" }}/>
                    </a>
                    <a href="http://www.github.com/xlvictory"><img src="/github.png" style={{ height: "35px" }}/></a>
                </p>
		</footer>
	</div>
		</>
	);
}
