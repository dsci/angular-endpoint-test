const foo = {
  foo: {
    word: "yes"
  }
};

export const handler = (req: any, res: any) => {
  const func = req.params[0];
  let r: any  = {};

  if (func === 'me') {
    r = me();
  } else if (func === 'you') {
    r = you();
  }
  res.status(200).json({ r });
};

const me = () => {
  return foo;
};

const you = () => {
  return 'some data from "you" endpoint';
};


export const fooApi = (req: any, res: any) => {
  res.status(200).json(foo);
}