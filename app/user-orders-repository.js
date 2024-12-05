const getUsersNames = async (db) => {
    return new Promise((resolve, reject) => {
        db.all(`SELECT DISTINCT name FROM USERS`, (err, rows) => {
            if (err) {
                reject(err);
            } else {
                resolve(rows.map(row => row.name));
            }
        });
    });
};

const getUserTotal = async (db, userName) => {
    return new Promise((resolve, reject) => {
        const sql = `SELECT SUM(total) as total FROM ORDERS o INNER JOIN USERS u ON u.id = o.user_id WHERE u.name = '${userName}'`;
        db.all(sql, (err, rows) => {
            if (err) {
                reject(err);
            } else {
                resolve({ name: userName, total: rows[0].total });
            }
        });
    });
};

module.exports.getMostValuableUsers = async (db, limit = 100) => {
    const userNames = await getUsersNames(db);
    const userTotals = [];
    for (const userName of userNames) {
        const userTotal = await getUserTotal(db, userName);
        userTotals.push(userTotal);
    }
    return userTotals.sort((a, b) => b.total - a.total).slice(0, limit);
};