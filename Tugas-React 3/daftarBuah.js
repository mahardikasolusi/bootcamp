import React, { Component } from "react";

class Lists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      daftarBuah: [
        { nama: "Nanas", hargaTotal: 100000, beratTotal: 4000 },
        { nama: "Manggis", hargaTotal: 350000, beratTotal: 10000 },
        { nama: "Nangka", hargaTotal: 90000, beratTotal: 2000 },
        { nama: "Durian", hargaTotal: 400000, beratTotal: 5000 },
        { nama: "Strawberry", hargaTotal: 120000, beratTotal: 6000 },
      ],
      inputName: "",
      hargaTotal: 0,
      beratTotal: 2000,
      currentIndex: "",
    };
  }

  handleChange = (e, props) => {
    this.setState({
      [props]: e.target.value,
    });
  };

  handleEdit = (e, props, index) => {
    this.setState({
      inputName: props.nama,
      hargaTotal: props.hargaTotal,
      beratTotal: props.beratTotal,
      currentIndex: index,
    });
  };

  update = (e) => {
    e.preventDefault();
    let form = {
      nama: this.state.inputName,
      hargaTotal: this.state.hargaTotal,
      beratTotal: this.state.beratTotal,
    };

    let newData = [...this.state.daftarBuah];
    newData[this.state.currentIndex] = form;

    this.setState({ daftarBuah: newData });

    this.clearData();
  };

  handleDelete = (e, index) => {
    let newDaftar = this.state.daftarBuah.filter((val, idx) => {
      return idx !== index;
    });
    this.setState({ daftarBuah: newDaftar });
  };

  submit = (e) => {
    e.preventDefault();
    let form = {
      nama: this.state.inputName,
      hargaTotal: this.state.hargaTotal,
      beratTotal: this.state.beratTotal,
    };

    this.setState({
      daftarBuah: [...this.state.daftarBuah, form],
    });

    this.clearData();
  };

  clearData = () => {
    this.setState({
      inputName: "",
      hargaTotal: 0,
      beratTotal: 2000,
    });
  };

  render() {
    return (
      <>
        <div style={{ width: "80%", margin: "0 auto" }}>
          <h1 style={{ textAlign: "center" }}>Daftar Harga Buah</h1>
          <table id="customers">
            <thead>
              <tr>
                <th>No</th>
                <th>Nama</th>
                <th>Harga Total</th>
                <th>Berat Total</th>
                <th>Harga per kg</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {this.state.daftarBuah.map((val, index) => {
                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{val.nama}</td>
                    <td>{val.hargaTotal}</td>
                    <td>{val.beratTotal / 1000} kg</td>
                    <td>{val.hargaTotal / (val.beratTotal / 1000)}</td>
                    <td>
                      <button
                        onClick={(e) => this.handleEdit(e, val, index)}
                        style={{ marginRight: "10px" }}
                      >
                        Edit
                      </button>
                      <button onClick={(e) => this.handleDelete(e, index)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        {/* Form */}
        <h1 style={{ textAlign: "center" }}>Form Daftar Harga Buah</h1>
        <div
          style={{
            width: "60%",
            border: "1px solid #aaa",
            margin: "0 auto",
            padding: "20px",
          }}
        >
          <form>
            <label
              style={{
                width: "300px",
                marginBottom: "10px",
                display: "inline-block",
              }}
            >
              Nama:
            </label>

            <input
              style={{ display: "inline-block", float: "right" }}
              type="text"
              value={this.state.inputName}
              onChange={(e) => this.handleChange(e, "inputName")}
            />

            <label
              style={{
                width: "300px",
                marginBottom: "10px",
                display: "inline-block",
              }}
            >
              Harga Total:
            </label>

            <input
              style={{ display: "inline-block", float: "right" }}
              type="number"
              value={this.state.hargaTotal}
              onChange={(e) => this.handleChange(e, "hargaTotal")}
            />

            <label
              style={{
                width: "300px",
                marginBottom: "10px",
                display: "inline-block",
              }}
            >
              Berat Total(dalam gram):
            </label>

            <input
              style={{ display: "inline-block", float: "right" }}
              min={2000}
              type="number"
              value={this.state.beratTotal}
              onChange={(e) => this.handleChange(e, "beratTotal")}
            />
            <div style={{ padding: 20, display: "flex" }}>
              <div style={{ marginLeft: "auto" }}>
                <button
                  style={{ marginRight: "10px" }}
                  onClick={(e) => this.submit(e)}
                >
                  Submit
                </button>
                <button onClick={(e) => this.update(e)}>Update</button>
              </div>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default Lists;
