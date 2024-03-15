class negotiations {
  constructor(data, quantidade, valor) {
    // só podemos chamar a tag constructor por causa do new que colocamos em negotiations

    this._data = new Date(data.getTime());
    this._quantidade = quantidade;
    this._valor = valor;
    Object.freeze(this);
  }

  get volume() {
    return this._quantidade * this._valor;
  }

  get data() {
    return new Date(this.data.getTime());
  }

  get quantidade() {
    return this._quantidade;
  }

  get valor() {
    return this._valor;
  }
}
