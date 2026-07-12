// import { useState } from "react";
// import { loginUser } from "../../services/authService";

// export default function Login() {

//   const [form, setForm] = useState({
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {

//     e.preventDefault();

//     try {

//       const res = await loginUser(form);

//       localStorage.setItem("token", res.data.token);
//       localStorage.setItem("user", JSON.stringify(res.data.user));

//       alert("Login Successful");

//       console.log(res.data);

//     } catch (err) {

//       alert(err.response?.data?.message || "Login Failed");

//     }
//   };

//   return (
//     <div style={{ padding: "30px" }}>
//       <h2>Login</h2>

//       <form onSubmit={handleSubmit}>

//         <input
//           name="email"
//           placeholder="Email"
//           value={form.email}
//           onChange={handleChange}
//         />

//         <br /><br />

//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={form.password}
//           onChange={handleChange}
//         />

//         <br /><br />

//         <button type="submit">
//           Login
//         </button>

//       </form>
//     </div>
//   );
// }


import { useState } from "react";
import { registerUser } from "../../services/authService";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    role: "Fleet Manager",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [loading, setLoading] = useState(false);

  const validateField = (name, value) => {
    const newErrors = { ...errors };

    switch (name) {
      case "name":
        if (!value.trim()) {
          newErrors.name = "Full name is required";
        } else if (value.trim().length < 2) {
          newErrors.name = "Full name must be at least 2 characters";
        } else if (!/^[a-zA-Z\s'-]*$/.test(value)) {
          newErrors.name = "Full name can only contain letters, spaces, hyphens, and apostrophes";
        } else {
          delete newErrors.name;
        }
        break;

      case "email":
        if (!value.trim()) {
          newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          newErrors.email = "Please enter a valid email address";
        } else {
          delete newErrors.email;
        }
        break;

      case "phone":
        if (!value.trim()) {
          newErrors.phone = "Phone number is required";
        } else if (!/^\+?[\d\s\-().]*$/.test(value)) {
          newErrors.phone = "Phone number contains invalid characters";
        } else if (!/\d/.test(value) || value.replace(/\D/g, "").length < 10) {
          newErrors.phone = "Phone number must contain at least 10 digits";
        } else {
          delete newErrors.phone;
        }
        break;

      case "password":
        if (!value) {
          newErrors.password = "Password is required";
        } else if (value.length < 6) {
          newErrors.password = "Password must be at least 6 characters";
        } else {
          delete newErrors.password;
        }
        break;

      case "confirmPassword":
        if (!value) {
          newErrors.confirmPassword = "Please confirm your password";
        } else if (value !== form.password) {
          newErrors.confirmPassword = "Passwords do not match";
        } else {
          delete newErrors.confirmPassword;
        }
        break;

      default:
        break;
    }

    setErrors(newErrors);
    return !newErrors[name];
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });

    if (touched[name]) {
      validateField(name, value);
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched({
      ...touched,
      [name]: true,
    });
    validateField(name, value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fieldsToValidate = ["name", "email", "phone", "password", "confirmPassword"];
    let isValid = true;

    fieldsToValidate.forEach((field) => {
      if (!validateField(field, form[field])) {
        isValid = false;
      }
      setTouched((prev) => ({
        ...prev,
        [field]: true,
      }));
    });

    if (!isValid) return;

    setLoading(true);

    try {
      const payload = {
        name: form.name,
        email: form.email,
        phone: form.phone,
        password: form.password,
        role: form.role,
      };

      const res = await registerUser(payload);

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      alert("Registration Successful");

      console.log(res.data);

      setForm({
        name: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
        role: "Fleet Manager",
      });
      setTouched({});

    } catch (err) {
      alert(err.response?.data?.message || "Registration Failed");
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    fontSize: "14px",
    boxSizing: "border-box",
    borderColor: (name) => {
      if (touched[name] && errors[name]) {
        return "#ef4444";
      }
      return "#ccc";
    },
  };

  const errorStyle = {
    color: "#ef4444",
    fontSize: "12px",
    marginTop: "-8px",
    marginBottom: "8px",
  };

  return (
    <div style={{ padding: "30px", maxWidth: "500px", margin: "0 auto" }}>
      <h2>Create Account</h2>

      <form onSubmit={handleSubmit}>
        {/* Full Name */}
        <div>
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            placeholder="John Doe"
            value={form.name}
            onChange={handleChange}
            onBlur={handleBlur}
            style={{
              ...inputStyle,
              borderColor: touched.name && errors.name ? "#ef4444" : "#ccc",
            }}
          />
          {touched.name && errors.name && (
            <div style={errorStyle}>{errors.name}</div>
          )}
        </div>

        {/* Email */}
        <div>
          <label>Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="john@example.com"
            value={form.email}
            onChange={handleChange}
            onBlur={handleBlur}
            style={{
              ...inputStyle,
              borderColor: touched.email && errors.email ? "#ef4444" : "#ccc",
            }}
          />
          {touched.email && errors.email && (
            <div style={errorStyle}>{errors.email}</div>
          )}
        </div>

        {/* Phone */}
        <div>
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="+1 (555) 123-4567"
            value={form.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            style={{
              ...inputStyle,
              borderColor: touched.phone && errors.phone ? "#ef4444" : "#ccc",
            }}
          />
          {touched.phone && errors.phone && (
            <div style={errorStyle}>{errors.phone}</div>
          )}
        </div>

        {/* Role Selection */}
        <div>
          <label>Role</label>
          <select
            name="role"
            value={form.role}
            onChange={handleChange}
            style={{
              ...inputStyle,
              cursor: "pointer",
            }}
          >
            <option>Fleet Manager</option>
            <option>Driver</option>
            <option>Safety Officer</option>
            <option>Financial Analyst</option>
          </select>
        </div>

        {/* Password */}
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            onBlur={handleBlur}
            style={{
              ...inputStyle,
              borderColor: touched.password && errors.password ? "#ef4444" : "#ccc",
            }}
          />
          {touched.password && errors.password && (
            <div style={errorStyle}>{errors.password}</div>
          )}
        </div>

        {/* Confirm Password */}
        <div>
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={form.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            style={{
              ...inputStyle,
              borderColor: touched.confirmPassword && errors.confirmPassword ? "#ef4444" : "#ccc",
            }}
          />
          {touched.confirmPassword && errors.confirmPassword && (
            <div style={errorStyle}>{errors.confirmPassword}</div>
          )}
        </div>

        <br />

        <button 
          type="submit" 
          disabled={loading}
          style={{
            cursor: loading ? "not-allowed" : "pointer",
            opacity: loading ? 0.7 : 1,
          }}
        >
          {loading ? "Registering..." : "Register"}
        </button>

        <p style={{ marginTop: "15px", textAlign: "center", fontSize: "14px" }}>
          Already have an account? <a href="/login" style={{ color: "#667eea", textDecoration: "none" }}>Login</a>
        </p>
      </form>
    </div>
  );
}