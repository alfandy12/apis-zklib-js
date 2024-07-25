const ZKLib = require('zklib');
const express = require('./node_modules/express');

const app = express();
const port = 3000;

const ZK = new ZKLib({
    ip: '192.168.8.2',
    port: 4370,
    inport: 5200,
    timeout: 5000,
});


const getTimeFromMachine = async () => {
    return new Promise((resolve, reject) => {
        ZK.connect(function (err) {
            if (err) {
                reject(err); // Jika ada error, kirimkan error
                return;
            }
            ZK.getTime(function (err, time) {
                ZK.disconnect();
                if (err) {
                    reject(err); // Jika ada error, kirimkan error
                    return;
                }
                resolve(time.toString()); // Jika sukses, kirimkan waktu dalam bentuk string
            });
        });
    });
};

// Fungsi untuk menghubungkan dan menyinkronkan waktu mesin
const syncTimeWithMachine = async () => {
    return new Promise((resolve, reject) => {
        ZK.connect(function (err) {
            if (err) {
                reject(err); // Jika ada error, kirimkan error
                return;
            }
            ZK.setTime(new Date(), function (err) {
                ZK.disconnect();
                if (err) {
                    reject(err); // Jika ada error, kirimkan error
                    return;
                }
                resolve(new Date().toString()); // Jika sukses, kirimkan waktu saat ini dalam bentuk string
            });
        });
    });
};

// Fungsi untuk menghubungkan dan menghapus log kehadiran dari mesin
const clearAttendanceLogFromMachine = async () => {
    return new Promise((resolve, reject) => {
        ZK.connect(function (err) {
            if (err) {
                reject(err); // Jika ada error, kirimkan error
                return;
            }
            ZK.clearAttendanceLog(function (err) {
                ZK.disconnect();
                if (err) {
                    reject(err); // Jika ada error, kirimkan error
                    return;
                }
                resolve('Attendance log cleared successfully'); // Jika sukses, kirimkan pesan sukses
            });
        });
    });
};

// Fungsi untuk menghubungkan dan mendapatkan semua pengguna dari mesin
const getUserFromMachine = async () => {
    return new Promise((resolve, reject) => {
        ZK.connect(function (err) {
            if (err) {
                reject(err); // Jika ada error, kirimkan error
                return;
            }
            ZK.getUser(function (err, users) {
                ZK.disconnect();
                if (err) {
                    reject(err); // Jika ada error, kirimkan error
                    return;
                }
                resolve(users); // Jika sukses, kirimkan data pengguna
            });
        });
    });
};

// Fungsi untuk menghubungkan dan mendapatkan data kehadiran dari mesin
const getAttendanceFromMachine = async () => {
    return new Promise((resolve, reject) => {
        ZK.connect(function (err) {
            if (err) {
                reject(err); // Jika ada error, kirimkan error
                return;
            }
            ZK.getAttendance(function (err, attendanceData) {
                ZK.disconnect();
                if (err) {
                    reject(err); // Jika ada error, kirimkan error
                    return;
                }
                resolve(attendanceData); // Jika sukses, kirimkan data kehadiran
            });
        });
    });
};

/* ================================================================================ */


//route
app.get('/', async (req, res) => {
    res.send('Information Machine attandance');
});

// Route untuk mendapatkan waktu dari mesin dengan async/await
app.get('/get-time', async (req, res) => {
    try {
        const time = await getTimeFromMachine();
        res.send([{ status: 'success', message: 'Success get time machine', data: { time_machine: time } }]);
    } catch (err) {
        res.status(500).send([{ status: 'error', message: err.message }]);
    }
});

// Route untuk menyinkronkan waktu mesin dengan async/await
app.get('/sync-time', async (req, res) => {
    try {
        const time = await syncTimeWithMachine();
        res.send([{ status: 'success', message: 'Success sync time machine', data: { time_machine: time } }]);
    } catch (err) {
        res.status(500).send([{ status: 'error', message: err.message }]);
    }
});

// Route untuk menghapus log kehadiran dari mesin dengan async/await
app.get('/clear-attendance-log', async (req, res) => {
    try {
        const result = await clearAttendanceLogFromMachine();
        res.send([{ status: 'success', message: result }]);
    } catch (err) {
        res.status(500).send([{ status: 'error', message: err.message }]);
    }
});

// Route untuk mendapatkan semua pengguna dari mesin dengan async/await
app.get('/get-users', async (req, res) => {
    try {
        const users = await getUserFromMachine();
        res.send([{ status: 'success', message: 'Success get users from machine', data: { users } }]);
    } catch (err) {
        res.status(500).send([{ status: 'error', message: err.message }]);
    }
});

// Route untuk mendapatkan data kehadiran dari mesin dengan async/await
app.get('/get-attendance', async (req, res) => {
    try {
        const attendanceData = await getAttendanceFromMachine();
        res.send([{ status: 'success', message: 'Success get attendance data', data: { attendance: attendanceData } }]);
    } catch (err) {
        res.status(500).send([{ status: 'error', message: err.message }]);
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
