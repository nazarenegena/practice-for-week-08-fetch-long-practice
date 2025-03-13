/*
Make fetch requests in the browser for each of the following phases.
Paste your code for fetch requests here once you finish each phase.
*/

/* ============================== Phase 1 ============================== */

// Your code here
// Formulating the body of the request

const phase1PostRequest = async () => {
    const res = await fetch('http://localhost:5000/products', {
        method: 'POST',
        headers: {
             "Content-Type": "application/x-www-form-urlencoded"
        },
        body : "name=Caribbean+Delight+Coffee&description=Made+by+Manatee+Coffee&price=11%2E99&categories=grocery"
    });
    const data = await res.json();
    console.log(data, "data");
}

/* ============================== Phase 2 ============================== */

// Your code here


const phase2PostRequest = async () => {
    const res = await fetch('http://localhost:5000/products', {
        method: 'POST',
        headers: {
             "Content-Type": "application/x-www-form-urlencoded"
        },
        body : "name=Caribbean+Delight+Coffee&description=Made+by+Manatee+Coffee&price=11%2E99&categories=grocery"
    });
    const data = await res.json();
    console.log(data, "status code - 200", "Content-Type header - text/html; charset=utf-8", );
}
/* ============================== Phase 3 ============================== */

