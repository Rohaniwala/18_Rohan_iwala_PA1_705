// const mysql = require('mysql');

// var con = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "node_ass"
// })

// con.connect((err) => {
//     if (err) {
//         console.log("connection not esthabhlished");
//     }
//     else {
//         console.log("connected");
//         // var sql = "create table EmployeeTB(empid int,empname varchar(255), joindate varchar(255))";
//         // con.query(sql, (err, result) => {
//         //     if (err) {
//         //         throw err;
//         //     } else {
//         //         console.log("table created");
//         //     }
//         // })
//         var sql = "insert into EmployeeTB (empid,empname, joindate) values(101,'abcd','21-aug-2023')";
//         con.query(sql, (err, result) => {
//             if (err) {
//                 throw err;
//             } else {
//                 console.log("Data Inserted");
//             }

//         })
//         var sql1 = "select * from EmployeeTB";
//         con.query(sql1, (err, result) => {
//             if (err) {
//                 throw err;
//             } else {
//                 console.log(result);
//             }
//         })
//     }


// })

const mysql = require('nodejs-mysql').default;

const conn = ({
    host: "localhost",
    user: "root",
    password: "",
    database: "Node_ass"
});

const db = mysql.getInstance(conn);

db.connect()
    .then(() => {
        console.log(`Connected!!`)

        var sql = "INSERT INTO employeetb (empid,empname,joinDate) VALUES (201,'abc','25-06-2022')";
        console.log("Record Inserted!!");
        return db.exec(sql);
    })

    .then((display) => {
        // var sqlDisplay = "SELECT * FROM employeetb";
        // console.log(display);
        return db.exec("SELECT * FROM employeetb");

    })

    .then((result) => {
        console.log('Employee Name \t Date of Join');
        for (var i in result) {
            console.log(result[i].empname + " \t\t " + result[i].joindate);
        }
    })

    .catch((err) => {
        console.log("Error: " + err);
        process.exit(0);
    })