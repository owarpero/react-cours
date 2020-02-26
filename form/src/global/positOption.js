class positions {
  constructor() {
    this.positions = [
      { titel: "junior", key: "firstPos", permission: true },
      { titel: "middle", key: "secondPos", permission: false },
      { titel: "senior", key: "thirdPos", permission: false },
      { titel: "team lead", key: "fourthhPos", permission: false }
    ];
  }
  getPositions() {
    return this.positions;
  }
}
export default new positions();
