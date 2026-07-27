const express = require("express");
const path = require("path");
const cors = require("cors");
const db = require("./db");

const app = express();
app.use(cors());

const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// Home Page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Test Route
app.get("/test", (req, res) => {
    res.send("Server is Working!");
});

// ===========================
// Register User
// ===========================
app.post("/register", (req, res) => {

    console.log("Register API Called");
    console.log(req.body);

    const { name, email, phone, password } = req.body;

    const sql =
        "INSERT INTO users (full_name, email, phone, password) VALUES (?, ?, ?, ?)";

    db.query(sql, [name, email, phone, password], (err, result) => {

        if (err) {
            console.error(err);

            return res.status(500).json({
                success: false,
                message: "Registration Failed"
            });
        }

        console.log("User Registered Successfully");

        res.json({
            success: true,
            message: "Registration Successful!"
        });

    });

});

// ===========================
// Login User
// ===========================
app.post("/login", (req, res) => {

    console.log("Login API Called");
    console.log(req.body);

    const { email, password } = req.body;

    const sql =
        "SELECT * FROM users WHERE email = ? AND password = ?";

    db.query(sql, [email, password], (err, result) => {

        if (err) {
            console.error(err);

            return res.status(500).json({
                success: false,
                message: "Database Error"
            });
        }

        if (result.length === 0) {

            return res.json({
                success: false,
                message: "Invalid Email or Password"
            });

        }

        res.json({
            success: true,
            message: "Login Successful!",
            user: result[0]
        });

    });

});
app.post("/google-login", (req, res) => {
    const { full_name, email } = req.body;
  
    // Check if user already exists
    db.query(
      "SELECT * FROM users WHERE email = ?",
      [email],
      (err, result) => {
        if (err) {
          return res.status(500).json({
            success: false,
            message: "Database Error",
          });
        }
  
        // Existing user
        if (result.length > 0) {
          return res.json({
            success: true,
            user: result[0],
          });
        }
  
        // Create new Google user
        db.query(
          `INSERT INTO users
          (full_name,email,phone,password)
          VALUES (?,?,?,?)`,
          [full_name, email, null, null],
          (err, insertResult) => {
            if (err) {
              return res.status(500).json({
                success: false,
                message: "Registration Failed",
              });
            }
  
            db.query(
              "SELECT * FROM users WHERE user_id=?",
              [insertResult.insertId],
              (err, newUser) => {
                if (err) {
                  return res.status(500).json({
                    success: false,
                    message: "Database Error",
                  });
                }
  
                res.json({
                  success: true,
                  user: newUser[0],
                });
              }
            );
          }
        );
      }
    );
  });
// ===========================
// Reservation
// ===========================
app.post("/reservation", (req, res) => {

    console.log("Reservation API Called");
    console.log(req.body);

    const {
        user_id,
        parking_id,
        vehicle_number,
        vehicle_type,
        booking_date,
        entry_time,
        exit_time,
        payment_method,
        amount
    } = req.body;

    const sql = `
        INSERT INTO reservations
        (
            user_id,
            parking_id,
            vehicle_number,
            vehicle_type,
            booking_date,
            entry_time,
            exit_time,
            payment_method,
            amount
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    db.query(
        sql,
        [
            user_id,
            parking_id,
            vehicle_number,
            vehicle_type,
            booking_date,
            entry_time,
            exit_time,
            payment_method,
            amount
        ],
        (err, result) => {

            if (err) {
                console.error(err);

                return res.json({
                    success: false,
                    message: "Reservation Failed"
                });
            }

            console.log("Reservation Saved Successfully");
            console.log("Reservation ID:", result.insertId);

            res.json({
                success: true,
                message: "Reservation Confirmed!",
                reservationId: result.insertId
            });

        }
    );

});
// ===========================
// Get User Reservations
// ===========================
app.get("/my-reservations/:userId", (req, res) => {

    const userId = req.params.userId;

    const sql = `
        SELECT
            r.reservation_id,
            p.parking_name,
            r.vehicle_number,
            r.vehicle_type,
            r.booking_date,
            r.entry_time,
            r.exit_time,
            r.payment_method,
            r.amount
        FROM reservations r
        JOIN parking p
        ON r.parking_id = p.parking_id
        WHERE r.user_id = ?
        ORDER BY r.booking_date DESC
    `;

    db.query(sql, [userId], (err, result) => {

        if (err) {
            console.error(err);

            return res.json({
                success: false,
                message: "Unable to fetch reservations"
            });
        }

        res.json({
            success: true,
            reservations: result
        });

    });

});
// ==========================
// Cancel Reservation
// ==========================

app.delete("/reservation/:id", (req, res) => {

    const reservationId = req.params.id;

    console.log("Delete Request Received");
    console.log("Reservation ID:", reservationId);

    const sql = "DELETE FROM reservations WHERE reservation_id = ?";

    db.query(sql, [reservationId], (err, result) => {

        if (err) {
            console.log("Delete Error:", err);

            return res.json({
                success: false,
                message: "Unable to cancel reservation."
            });
        }

        console.log("Delete Result:", result);

        if (result.affectedRows === 0) {
            return res.json({
                success: false,
                message: "Reservation not found."
            });
        }

        res.json({
            success: true,
            message: "Reservation Cancelled Successfully!"
        });

    });

});
app.get("/parking", (req, res) => {
    db.query("SELECT * FROM parking", (err, result) => {
      if (err) {
        return res.status(500).json({
          success: false,
          message: "Database Error",
        });
      }
  
      res.json(result);
    });
  });

// Start Server
app.listen(PORT, () => {
    console.log(`✅ Server running at http://localhost:${PORT}`);
});