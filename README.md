## 1. Controlled Component

- **Controlled components** adalah komponen di mana data input dikontrol sepenuhnya oleh state React. Nilai input ditentukan oleh state, dan setiap kali input berubah, event `onChange` akan dipanggil untuk memperbarui state dengan nilai input baru.
- Pada contoh `ControlledInput`, nilai dari input diikat ke state `value`, dan `handleChange()` dipanggil setiap kali ada perubahan pada input.

```javascript
<input type="text" value={this.state.value} onChange={this.handleChange} />
```

- **Kelebihan:** Dengan controlled component, React memiliki kontrol penuh terhadap nilai input, sehingga lebih mudah mengimplementasikan validasi dan logika bisnis lainnya.

## 2. Uncontrolled Component

- **Uncontrolled components** adalah komponen di mana nilai input tidak dikontrol oleh state React, tetapi diambil langsung dari DOM menggunakan `ref`.
- Pada contoh `UncontrolledInput`, kita menggunakan `this.inputRef` untuk mengambil nilai input ketika tombol "Submit" diklik. Nilai ini tidak disimpan di state, melainkan langsung diakses dari DOM.

```javascript
<input type="text" ref={this.inputRef} />
```

- **Kelebihan**: Lebih mudah untuk komponen sederhana yang tidak memerlukan validasi atau interaksi yang rumit.
- **Kekurangan**: Lebih sulit untuk mengimplementasikan validasi dan logika kompleks karena React tidak mengontrol nilai input.

## 3. Form Validation (Validasi Form)

- **Validasi form** adalah hal penting untuk memastikan pengguna memasukkan data yang benar sebelum dikirim ke server. Pada contoh `SimpleForm`, kita melakukan validasi sederhana dengan memastikan bahwa input `name` tidak kosong.
- Jika input kosong, pesan error ditampilkan, dan form tidak akan dikirim.

```javascript
handleSubmit = (e) => {
  e.preventDefault();
  if (this.state.name === "") {
    this.setState({ error: "Name is required" });
  } else {
    this.setState({ error: "" });
    alert("Form submitted");
  }
};
```

- **Kelebihan**: Memungkinkan untuk mencegah pengiriman form jika data tidak valid, yang berguna dalam skenario form yang kompleks.

## 4. Handling Multiple Inputs (Meng-handle Beberapa Input)

- Untuk form yang memiliki beberapa input, kita dapat menggunakan satu event handler `handleChange()` yang memperbarui state berdasarkan `name` dari input yang sedang diubah.
- Pada contoh `MultipleInputForm`, kita menangani input `name` dan `email` dengan satu event handler. Properti `name` pada input digunakan untuk mengidentifikasi input mana yang sedang diubah.

```javascript
handleChange = (e) => {
  this.setState({ [e.target.name]: e.target.value });
};
```

- **Kelebihan**: Dapat menangani banyak input dalam satu form dengan lebih efisien, serta memungkinkan validasi untuk setiap field.
