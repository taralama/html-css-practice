Promise.resolve().then(() => {
    console.log('A');
    return Promise.resolve();
  }).then(() => {
    console.log('B');
  });
  
  Promise.reject().catch(() => {
    console.log('C');
  }).then(() => {
    console.log('D');
  });
  
  console.log('E');


  // in this step when the first .then is executed inside the .then there is another .then due to the return of resolve for the inside .then new microtask is created hence
  // not consoling the b and going to the c again 
  