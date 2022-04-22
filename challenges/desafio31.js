// https://stackoverflow.com/questions/4442453/mongodb-query-condition-on-comparing-2-fields

db.produtos.find({ $where: "this.curtidas > this.vendidos" }, { nome: 1, _id: 0 });