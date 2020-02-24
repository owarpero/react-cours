import nanoid from "nanoid";

class positions {
  constructor() {
    this.positions = [
      { titel: "junior", key: nanoid(), permission: true },
      { titel: "middle", key: nanoid(), permission: false },
      { titel: "senior", key: nanoid(), permission: false },
      { titel: "team lead", key: nanoid(), permission: false }
    ];
  }
  getPositions() {
    return this.positions;
  }
}
export default new positions();
