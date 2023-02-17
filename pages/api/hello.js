// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// import db from 'data/db.json';
let fs = require('fs');
let db = require('data/db.json');

export default function handler(req, res) {
  const { method, body } = req;
  switch (method) {
    case 'GET': dataGet(); break;
    case 'POST': dataCreate(); break;
    case 'PUT': dataUpdate(); break;
    case 'DELETE': dataDelete(); break;
  }

  function dataGet() {
    res.status(200).json(db)
  }

  function dataCreate() {
    db.push(body);
    //문서에다가 해당값을 써준다 .
    fs.writeFileSync('data/db.json', JSON.stringify(db));
    res.status(200).json(db)
    saveDate();
  }

  function dataUpdate() {
    const user = db.find(obj => obj.id == body.id);
    Object.assign(user, body)
    saveDate();
  }


  function dataDelete() {
    db = db.filter(obj => obj.id != body);
    saveDate();
  }

  function saveDate() {
    fs.writeFileSync('data/db.json', JSON.stringify(db));
    res.status(200).json(db)
  }

  // res.status(200).json({ name: 'John Doe' })
}
