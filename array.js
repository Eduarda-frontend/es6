const alunos = [
    { nome: "José", nota: 5},
    { nome: "Maria", nota: 6},
    { nome: "Fabio", nota: 7},
    { nome: "Gerson", nota: 3},
    { nome: "Cleusa", nota: 8}
  
  ];
  
  const verificaNota = alunos.filter(function (item) {
      return item.nota >= 6
  }) 
  
  console.log(verificaNota);