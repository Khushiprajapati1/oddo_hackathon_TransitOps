import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Register = () => {
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
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDarkMode(isDark);
  }, []);

  const validateField = (name, value) => {
    const newErrors = { ...errors };

    switch (name) {
      case "name":
        if (!value.trim()) {
          newErrors.name = "Full name is required";
        } else if (value.trim().length < 2) {
          newErrors.name = "Full name must be at least 2 characters";
        } else if (!/^[a-zA-Z\s'-]*$/.test(value)) {
          newErrors.name =
            "Full name can only contain letters, spaces, hyphens, and apostrophes";
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
    setForm((prev) => ({ ...prev, [name]: value }));

    if (touched[name]) {
      validateField(name, value);
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    validateField(name, value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fieldsToValidate = [
      "name",
      "email",
      "phone",
      "password",
      "confirmPassword",
    ];
    let isValid = true;

    fieldsToValidate.forEach((field) => {
      if (!validateField(field, form[field])) {
        isValid = false;
      }
      setTouched((prev) => ({ ...prev, [field]: true }));
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

      console.log("Registration payload:", payload);

      // Uncomment to use actual API:
      // const res = await registerUser(payload);
      // alert(res.data.message);

      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSuccessMessage("Account created successfully! Redirecting...");

      setTimeout(() => {
        alert(
          "Registration successful!\n\n" + JSON.stringify(payload, null, 2),
        );
        setForm({
          name: "",
          email: "",
          phone: "",
          password: "",
          confirmPassword: "",
          role: "Fleet Manager",
        });
        setTouched({});
        setSuccessMessage("");
      }, 1500);
    } catch (err) {
      alert(err.message || "Registration Failed");
    } finally {
      setLoading(false);
    }
  };

  const styles = {
    container: {
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px",
      background: darkMode
        ? "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)"
        : "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      transition: "background 0.3s ease",
    },
    card: {
      background: darkMode ? "#0f3460" : "rgba(255, 255, 255, 0.95)",
      backdropFilter: "blur(10px)",
      borderRadius: "20px",
      boxShadow: darkMode
        ? "0 8px 32px rgba(0, 0, 0, 0.5)"
        : "0 8px 32px rgba(0, 0, 0, 0.2)",
      padding: "40px",
      maxWidth: "500px",
      width: "100%",
      position: "relative",
    },
    header: {
      marginBottom: "30px",
      textAlign: "center",
    },
    title: {
      fontSize: "32px",
      fontWeight: "700",
      margin: "0 0 10px 0",
      color: darkMode ? "#fff" : "#1a1a2e",
    },
    subtitle: {
      fontSize: "14px",
      color: darkMode ? "#b0b0b0" : "#666",
      margin: "0",
    },
    formGroup: {
      marginBottom: "20px",
    },
    label: {
      display: "flex",
      alignItems: "center",
      fontSize: "13px",
      fontWeight: "600",
      marginBottom: "8px",
      color: darkMode ? "#e0e0e0" : "#333",
    },
    iconLabel: {
      marginRight: "8px",
      fontSize: "16px",
    },
    input: {
      width: "100%",
      padding: "12px 16px",
      fontSize: "14px",
      border: "2px solid",
      borderColor: darkMode ? "#2d5a7b" : "#e0e0e0",
      borderRadius: "10px",
      background: darkMode ? "#1a3a52" : "#f8f9fa",
      color: darkMode ? "#fff" : "#000",
      outline: "none",
      transition: "all 0.3s ease",
      boxSizing: "border-box",
    },
    select: {
      width: "100%",
      padding: "12px 16px",
      fontSize: "14px",
      border: "2px solid",
      borderColor: darkMode ? "#2d5a7b" : "#e0e0e0",
      borderRadius: "10px",
      background: darkMode ? "#1a3a52" : "#f8f9fa",
      color: darkMode ? "#fff" : "#000",
      outline: "none",
      transition: "all 0.3s ease",
      boxSizing: "border-box",
      cursor: "pointer",
    },
    error: {
      fontSize: "12px",
      color: "#ef4444",
      marginTop: "6px",
      display: "flex",
      alignItems: "center",
    },
    errorIcon: {
      marginRight: "4px",
      fontSize: "14px",
    },
    checkboxLabel: {
      display: "flex",
      alignItems: "center",
      fontSize: "14px",
      color: darkMode ? "#e0e0e0" : "#333",
      marginBottom: "20px",
      cursor: "pointer",
    },
    checkbox: {
      marginRight: "8px",
      cursor: "pointer",
      width: "16px",
      height: "16px",
    },
    submitButton: {
      width: "100%",
      padding: "14px 24px",
      marginTop: "10px",
      fontSize: "16px",
      fontWeight: "600",
      border: "none",
      borderRadius: "10px",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      color: "#fff",
      cursor: "pointer",
      transition: "all 0.3s ease",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      opacity: loading ? 0.7 : 1,
    },
    submitButtonHover: {
      transform: "translateY(-2px)",
      boxShadow: "0 8px 20px rgba(102, 126, 234, 0.4)",
    },
    spinner: {
      display: "inline-block",
      width: "16px",
      height: "16px",
      marginRight: "8px",
      borderRadius: "50%",
      border: "2px solid rgba(255, 255, 255, 0.3)",
      borderTop: "2px solid #fff",
      animation: "spin 0.6s linear infinite",
    },
    successMessage: {
      padding: "12px 16px",
      marginBottom: "20px",
      borderRadius: "8px",
      background: darkMode
        ? "rgba(34, 197, 94, 0.2)"
        : "rgba(34, 197, 94, 0.1)",
      color: darkMode ? "#86efac" : "#22c55e",
      fontSize: "14px",
      textAlign: "center",
      animation: "slideIn 0.3s ease",
    },
    darkModeToggle: {
      position: "fixed",
      bottom: "30px",
      right: "30px",
      width: "50px",
      height: "50px",
      borderRadius: "50%",
      background: darkMode
        ? "linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)"
        : "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      border: "none",
      cursor: "pointer",
      fontSize: "24px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
      transition: "all 0.3s ease",
    },
    darkModeToggleHover: {
      transform: "scale(1.1)",
      boxShadow: "0 6px 16px rgba(0, 0, 0, 0.4)",
    },
  };

  return (
    <>
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        @keyframes slideIn {
          from { 
            opacity: 0;
            transform: translateY(-10px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <div style={styles.container}>
        <div style={styles.card}>
          <div style={styles.header}>
            <h2 style={styles.title}>Create Account</h2>
            <p style={styles.subtitle}>Join our fleet management platform</p>
          </div>

          {successMessage && (
            <div style={styles.successMessage}>✓ {successMessage}</div>
          )}

          <form onSubmit={handleSubmit}>
            <div style={styles.formGroup}>
              <label style={styles.label}>
                <span style={styles.iconLabel}>👤</span>
                Full Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                value={form.name}
                onChange={handleChange}
                onBlur={handleBlur}
                style={{
                  ...styles.input,
                  ...(touched.name &&
                    errors.name && { borderColor: "#ef4444" }),
                }}
              />
              {touched.name && errors.name && (
                <div style={styles.error}>
                  <span style={styles.errorIcon}>⚠️</span>
                  {errors.name}
                </div>
              )}
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>
                <span style={styles.iconLabel}>📧</span>
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="john@example.com"
                value={form.email}
                onChange={handleChange}
                onBlur={handleBlur}
                style={{
                  ...styles.input,
                  ...(touched.email &&
                    errors.email && { borderColor: "#ef4444" }),
                }}
              />
              {touched.email && errors.email && (
                <div style={styles.error}>
                  <span style={styles.errorIcon}>⚠️</span>
                  {errors.email}
                </div>
              )}
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>
                <span style={styles.iconLabel}>📱</span>
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="+1 (555) 123-4567"
                value={form.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                style={{
                  ...styles.input,
                  ...(touched.phone &&
                    errors.phone && { borderColor: "#ef4444" }),
                }}
              />
              {touched.phone && errors.phone && (
                <div style={styles.error}>
                  <span style={styles.errorIcon}>⚠️</span>
                  {errors.phone}
                </div>
              )}
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>
                <span style={styles.iconLabel}>👔</span>
                Role
              </label>
              <select
                name="role"
                value={form.role}
                onChange={handleChange}
                style={styles.select}
              >
                <option>Fleet Manager</option>
                <option>Driver</option>
                <option>Safety Officer</option>
                <option>Financial Analyst</option>
              </select>
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>
                <span style={styles.iconLabel}>🔒</span>
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                onBlur={handleBlur}
                style={{
                  ...styles.input,
                  ...(touched.password &&
                    errors.password && { borderColor: "#ef4444" }),
                }}
              />
              {touched.password && errors.password && (
                <div style={styles.error}>
                  <span style={styles.errorIcon}>⚠️</span>
                  {errors.password}
                </div>
              )}
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>
                <span style={styles.iconLabel}>🔐</span>
                Confirm Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm Password"
                value={form.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                style={{
                  ...styles.input,
                  ...(touched.confirmPassword &&
                    errors.confirmPassword && { borderColor: "#ef4444" }),
                }}
              />
              {touched.confirmPassword && errors.confirmPassword && (
                <div style={styles.error}>
                  <span style={styles.errorIcon}>⚠️</span>
                  {errors.confirmPassword}
                </div>
              )}
            </div>

            <label style={styles.checkboxLabel}>
              <input
                type="checkbox"
                checked={showPassword}
                onChange={() => setShowPassword(!showPassword)}
                style={styles.checkbox}
              />
              Show Password
            </label>

            <button
              type="submit"
              disabled={loading}
              style={styles.submitButton}
              onMouseEnter={(e) => {
                if (!loading) {
                  e.target.style.transform = styles.submitButtonHover.transform;
                  e.target.style.boxShadow = styles.submitButtonHover.boxShadow;
                }
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "none";
              }}
            >
              {loading ? (
                <>
                  <div style={styles.spinner}></div>
                  Registering...
                </>
              ) : (
                "Register"
              )}
            </button>

            <p
              style={{
                textAlign: "center",
                marginTop: "15px",
                fontSize: "14px",
                color: darkMode ? "#b0b0b0" : "#666",
              }}
            >
              Already have an account?{" "}
              <Link
                to="/login"
                style={{
                  color: "#667eea",
                  textDecoration: "none",
                  fontWeight: "600",
                }}
              >
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>

      <button
        onClick={() => setDarkMode(!darkMode)}
        style={styles.darkModeToggle}
        title={`Switch to ${darkMode ? "light" : "dark"} mode`}
        onMouseEnter={(e) => {
          e.target.style.transform = styles.darkModeToggleHover.transform;
          e.target.style.boxShadow = styles.darkModeToggleHover.boxShadow;
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = "scale(1)";
          e.target.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.3)";
        }}
      >
        {darkMode ? "☀️" : "🌙"}
      </button>
    </>
  );
};

export default Register;
