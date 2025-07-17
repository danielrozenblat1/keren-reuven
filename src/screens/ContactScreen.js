import React, { useState } from 'react';
import styles from './ContactScreen.module.css';
import keren from "../images/קרן טופס.jpg"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    marketingConsent: false
  });

  // State for validation errors
  const [errors, setErrors] = useState({
    fullName: '',
    email: '',
    phone: ''
  });

  // State for form submission status
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Server settings
  const serverUrl = "https://dynamic-server-dfc88e1f1c54.herokuapp.com/leads/newLead";
  const reciver = "kerenor20@gmail.com";

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    handleInputChange(name, newValue);
  };

  // וולידציה למייל
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // וולידציה לטלפון (מספר ישראלי)
  const isValidPhone = (phone) => {
    const phoneRegex = /^0(5\d|[23489])\d{7}$/;
    return phoneRegex.test(phone.replace(/[-\s]/g, ''));
  };

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    
    const { fullName, email, phone, marketingConsent } = formData;
    
    // Validate inputs
    let valid = true;
    const newErrors = {};

    // Validate full name
    if (!fullName.trim()) {
      newErrors.fullName = 'נא להזין שם מלא';
      valid = false;
    } else if (fullName.trim().length < 2) {
      newErrors.fullName = 'שם חייב להכיל לפחות 2 תווים';
      valid = false;
    }

    // Validate phone number
    if (!phone.trim()) {
      newErrors.phone = 'נא להזין מספר טלפון';
      valid = false;
    } else if (!isValidPhone(phone)) {
      newErrors.phone = 'נא להזין מספר טלפון תקין';
      valid = false;
    }
    
    // Validate email
    if (!email.trim()) {
      newErrors.email = 'נא להזין כתובת אימייל';
      valid = false;
    } else if (!isValidEmail(email)) {
      newErrors.email = 'נא להזין כתובת אימייל תקינה';
      valid = false;
    }

    // Check if terms are accepted
    if (!marketingConsent) {
      alert('יש לאשר קבלת תכנים שיווקיים');
      return;
    }

    setErrors(newErrors);
    
    if (!valid) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Server data object
    const serverData = {
      name: fullName,
      phone: phone,
      email: email,
      reciver: reciver
    };

    try {
      // Send to server
      const serverResponse = await fetch(serverUrl, {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(serverData)
      });

      if (serverResponse.ok) {
        setIsSubmitting(false);
        setSubmitted(true);
        
        // Reset form after successful submission
        setTimeout(() => {
          setFormData({
            fullName: '',
            email: '',
            phone: '',
            marketingConsent: false
          });
          setSubmitted(false);
        }, 3000);
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      alert("התרחשה שגיאה, אנא נסו שוב מאוחר יותר");
      console.error('Error submitting form:', error);
      setIsSubmitting(false);
    }
  };

  const isFormValid = 
    formData.fullName.trim() !== '' && 
    isValidPhone(formData.phone) && 
    isValidEmail(formData.email) && 
    formData.marketingConsent;

  return (
    <div className={styles.container}>
      <div className={styles.imageSection}>
        <img 
          src={keren} 
          alt="Contact us"
          className={styles.image}
        />
      </div>
      
      <div className={styles.formSection}>
        <div className={styles.formContent}>
          <h2 className={styles.title}>לעוד פרטים ולשיחה אישית ממני</h2>
          <p className={styles.subtitle}>השאירו פרטים ואחזור אליכם בהקדם</p>
          
          <div className={styles.form}>
            <div className={styles.inputGroup}>
              <input
                type="text"
                name="fullName"
                placeholder="שם מלא"
                value={formData.fullName}
                onChange={handleChange}
                className={`${styles.input} ${errors.fullName ? styles.inputError : ''}`}
                disabled={isSubmitting || submitted}
                required
              />
              {errors.fullName && <span className={styles.errorText}>{errors.fullName}</span>}
            </div>
            
            <div className={styles.inputGroup}>
              <input
                type="email"
                name="email"
                placeholder="דואר אלקטרוני"
                value={formData.email}
                onChange={handleChange}
                className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                disabled={isSubmitting || submitted}
                required
              />
              {errors.email && <span className={styles.errorText}>{errors.email}</span>}
            </div>
            
            <div className={styles.inputGroup}>
              <input
                type="tel"
                name="phone"
                placeholder="טלפון"
                value={formData.phone}
                onChange={handleChange}
                className={`${styles.input} ${errors.phone ? styles.inputError : ''}`}
                disabled={isSubmitting || submitted}
                required
              />
              {errors.phone && <span className={styles.errorText}>{errors.phone}</span>}
            </div>
            
            <div className={styles.checkboxGroup}>
              <label className={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  name="marketingConsent"
                  checked={formData.marketingConsent}
                  onChange={handleChange}
                  className={styles.checkbox}
                  disabled={isSubmitting || submitted}
                />
                <span className={styles.checkmark}></span>
                <span className={styles.checkboxText}>
                  אני מאשר/ת קבלת תכנים שיווקיים במייל
                </span>
              </label>
            </div>
            
            <div 
              onClick={handleSubmit} 
              className={`${styles.submitButton} ${isSubmitting ? styles.submitting : ''} ${submitted ? styles.submitted : ''}`}
              style={{ 
                opacity: (!isFormValid || isSubmitting || submitted) ? 0.6 : 1,
                cursor: (!isFormValid || isSubmitting || submitted) ? 'not-allowed' : 'pointer'
              }}
            >
              {isSubmitting ? 'שולח...' : submitted ? 'נשלח בהצלחה!' : 'קרן, בואי נדבר!'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;