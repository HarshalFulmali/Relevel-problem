function createTable(table,n) {
    for(let i = 1; i <= n; i++) {
        console.log(`${table} * ${i} = ${table * i}`);
    }
}

createTable(5,15);