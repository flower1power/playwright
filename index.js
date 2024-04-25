const user = {
  firstName: "Гена",
  lastName: "Букин",
  achievments: {
    important: "хет-трик в финале турнира Кожанный мяч",
  },
};

const company = {
  name: "Apple",
  location: "Калифорния, США",
  achievments: {
    important: "Сделали iPhone",
  },
};

const printInfo = (obj) => {
  console.dir(obj);
};

const printOnlyAch = ({ achievments }) => {
  console.dir(achievments);
};

// printInfo(user);
// printInfo(company);
printOnlyAch(user);
printOnlyAch(company);
