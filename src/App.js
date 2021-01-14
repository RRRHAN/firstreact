import React, { Component } from "react"
import "./App.css"
import Alert from "./components/alert"
import Palert from "./components/props_alert"
import Media from "./components/media"

class App extends Component {
	constructor() {
		super()
		let option = []
		for (let i = 1; i < 13; i++) {
			option.push(`${i}`)
		}
		this.state = {
			type: "danger",
			header: "Fatal Error",
			content: "ini content dari alert",
			option: option,
		}
	}
	changeTypeAlert = (event) => {
		this.setState({ type: event.target.value })
	}
	changeHeaderAlert = (event) => {
		this.setState({ header: event.target.value })
	}
	changeContentAlert = (event) => {
		this.setState({ content: event.target.value })
	}
	UbahBerat = (event) => {
		this.setState({ berat: event.target.value })
	}
	UbahTinggi = (event) => {
		this.setState({ tinggi: event.target.value })
	}
	HitungBMI = () => {
		let bmi = this.state.berat / this.state.tinggi ** 2,
			bmiStatus = null
		if (bmi < 18.5) {
			bmiStatus = `kekurangan berat badan => BMI(${bmi})`
		} else if (bmi < 25) {
			bmiStatus = `Normal (Ideal) => BMI(${bmi})`
		} else if (bmi < 30) {
			bmiStatus = `Kelebihan berat badan => BMI(${bmi})`
		} else {
			bmiStatus = `Kegemukan (Obesitas) => BMI(${bmi})`
		}
		this.setState({ bmiStatus: bmiStatus })
	}
	UbahNominal = (event) => {
		this.setState({ nominal: event.target.value })
	}
	UbahBunga = (event) => {
		this.setState({ bunga: event.target.value })
	}
	UbahPeriode = (event) => {
		this.setState({ periode: event.target.value })
	}
	Hitungcicilan = () => {
		let bunga = this.state.bunga / 100 + 1
		let cicilan = (this.state.nominal * bunga) / this.state.periode
		this.setState({
			cicilan: cicilan,
		})
	}
	UbahHargaAwal = (event) => {
		this.setState({ hargaAwal: event.target.value })
	}
	UbahPPN = (event) => {
		this.setState({ PPN: event.target.value })
	}
	UbahDiskon = (event) => {
		this.setState({ Diskon: event.target.value })
	}
	HitungHargaAkhir = () => {
		let persen = (this.state.PPN - this.state.Diskon) / 100 + 1,
			hargaAkhir = this.state.hargaAwal * persen
		this.setState({ hargaAkhir: hargaAkhir })
	}
	UbahBilangan = (event) => {
		this.setState({ Bilangan: event.target.value })
	}
	UbahDari = (event) => {
		this.setState({ Dari: event.target.value })
	}
	UbahMenjadi = (event) => {
		this.setState({ Menjadi: event.target.value })
	}
	Konversi = () => {
		let HasilKonversi = null,
			dari = this.state.Dari,
			menjadi = this.state.Menjadi,
			bilangan = this.state.Bilangan
		console.log(`${dari} - ${menjadi} - ${bilangan}`)
		if (dari === "Desimal") {
			if (menjadi === "Hexadesimal") {
				HasilKonversi = this.d2h(bilangan)
			} else if (menjadi === "Biner") {
				HasilKonversi = this.d2b(bilangan)
			} else if (menjadi === "Oktal") {
				HasilKonversi = this.d2o(bilangan)
			}
		} else if (dari === "Biner") {
			if (menjadi === "Desimal") {
				HasilKonversi = this.b2d(bilangan)
			} else if (menjadi === "Hexadesimal") {
				HasilKonversi = this.b2h(bilangan)
			} else if (menjadi === "Oktal") {
				HasilKonversi = this.b2o(bilangan)
			}
		} else if (dari === "Oktal") {
			if (menjadi === "Desimal") {
				HasilKonversi = this.o2d(bilangan)
			} else if (menjadi === "Biner") {
				HasilKonversi = this.o2b(bilangan)
			} else if (menjadi === "Hexadesimal") {
				HasilKonversi = this.o2h(bilangan)
			}
		} else if (dari === "Hexadesimal") {
			if (menjadi === "Desimal") {
				HasilKonversi = this.h2d(bilangan)
			} else if (menjadi === "Biner") {
				HasilKonversi = this.h2b(bilangan)
			} else if (menjadi === "Oktal") {
				HasilKonversi = this.h2o(bilangan)
			}
		}
		this.setState({ HasilKonversi: HasilKonversi })
	}
	b2o = (binary) => {
		let octal = parseInt(Number(binary), 2).toString(8)
		return octal
	}

	b2h = (binary) => {
		let hexa = parseInt(Number(binary), 2).toString(16)
		return hexa
	}

	b2d = (binary) => {
		let decimal = Number(parseInt(binary, 2))
		return decimal
	}

	d2b = (decimal) => {
		let binary = ""
		let temp = decimal

		while (temp > 0) {
			if (temp % 2 == 0) {
				binary = "0" + binary
			} else {
				binary = "1" + binary
			}

			temp = Math.floor(temp / 2)
		}

		return binary
	}

	d2o = (decimal) => {
		let octal = ""
		let temp = decimal

		while (temp > 0) {
			if (temp % 8 == 0) {
				octal = "0" + octal
			} else if (temp % 8 == 1) {
				octal = "1" + octal
			} else if (temp % 8 == 2) {
				octal = "2" + octal
			} else if (temp % 8 == 3) {
				octal = "3" + octal
			} else if (temp % 8 == 4) {
				octal = "4" + octal
			} else if (temp % 8 == 5) {
				octal = "5" + octal
			} else if (temp % 8 == 6) {
				octal = "6" + octal
			} else if (temp % 8 == 7) {
				octal = "7" + octal
			}
			temp = Math.floor(temp / 8)
		}

		return octal
	}

	d2h = (decimal) => {
		let hexa = ""
		let temp = decimal

		while (temp > 0) {
			if (temp % 16 == 0) {
				hexa = "0" + hexa
			} else if (temp % 16 == 1) {
				hexa = "1" + hexa
			} else if (temp % 16 == 2) {
				hexa = "2" + hexa
			} else if (temp % 16 == 3) {
				hexa = "3" + hexa
			} else if (temp % 16 == 4) {
				hexa = "4" + hexa
			} else if (temp % 16 == 5) {
				hexa = "5" + hexa
			} else if (temp % 16 == 6) {
				hexa = "6" + hexa
			} else if (temp % 16 == 7) {
				hexa = "7" + hexa
			} else if (temp % 16 == 8) {
				hexa = "8" + hexa
			} else if (temp % 16 == 9) {
				hexa = "9" + hexa
			} else if (temp % 16 == 10) {
				hexa = "A" + hexa
			} else if (temp % 16 == 11) {
				hexa = "B" + hexa
			} else if (temp % 16 == 12) {
				hexa = "C" + hexa
			} else if (temp % 16 == 13) {
				hexa = "D" + hexa
			} else if (temp % 16 == 14) {
				hexa = "E" + hexa
			} else if (temp % 16 == 15) {
				hexa = "F" + hexa
			}
			temp = Math.floor(temp / 16)
		}

		return hexa
	}

	o2b = (octal) => {
		let binary = parseInt(Number(octal), 8).toString(2)
		return binary
	}

	o2h = (octal) => {
		let hexa = parseInt(Number(octal), 8).toString(16)
		return hexa
	}

	o2d = (octal) => {
		let decimal = parseInt(Number(octal), 8)
		return decimal
	}

	h2b = (hexa) => {
		let binary = parseInt(hexa, 16).toString(2)
		return binary
	}

	h2o = (hexa) => {
		let octal = parseInt(hexa, 16).toString(8)
		return octal
	}

	h2d = (hexa) => {
		let decimal = parseInt(hexa, 16)
		return decimal
	}
	render() {
		let option = this.state.option,
			bilangan = ["Desimal", "Biner", "Oktal", "Hexadesimal"]
		return (
			<div>
				<div className='App'>
					<h3> Ini Project Pertama React JS </h3>
					<p> Belajar React JS itu mudah </p>
				</div>
				<div className='App'>
					<h3 className='judul'> Ini Project Pertama React JS </h3>
					<p className='subJudul'> Belajar React JS itu mudah </p>
				</div>
				<div className='App container'>
					<div className='alert alert-info mt-3'>
						<h3 className='text-danger'>Ini Project Pertama React JS</h3>
						<p>Belajar React JS itu mudah</p>
						<button className='mr-1 btn btn-success'>Setuju</button>
						<button className='btn btn-info'>Iya Dong</button>
					</div>
				</div>
				<div className='App container col-sm-6 mt-3'>
					<Alert />
					<Alert />
					<Alert />
				</div>
				<div className='App container col-sm-6'>
					<Palert type='danger' header='Fatal Error'>
						Ini adalah alert dengan tipe danger
					</Palert>
					<Palert type='success' header='Berhasil'>
						Ini adalah alert dengan tipe success
					</Palert>
					<Palert type='warning' header='Warning'>
						Ini adalah alert dengan tipe warning
					</Palert>
				</div>
				<Media image='react.png' title='React JS'>
					Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
					scelerisque ante sollicitudin. Cras purus odio, vestibulum in
					vulputate at, tempus viverra turpis
				</Media>
				<Media image='angular.png' title='Angular JS'>
					Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
					scelerisque ante sollicitudin. Cras purus odio, vestibulum in
					vulputate at, tempus viverra turpis
				</Media>
				<div className='App container col-sm-6 mb-5'>
					<Palert type={this.state.type} header={this.state.header}>
						{this.state.content}
					</Palert>
					<hr />
					<h4>Alert Control</h4>
					<b className='text-left'>Tipe Alert</b>
					<select
						className='form-control'
						name='type'
						value={this.state.type}
						onChange={this.changeTypeAlert}
					>
						<option value='success'>Success</option>
						<option value='warning'>Warning</option>
						<option value='danger'>Danger</option>
						<option value='info'>Info</option>
					</select>
					<b className='text-left'>Header Alert</b>
					<input
						type='text'
						name='header'
						className='form-control'
						value={this.state.header}
						onChange={this.changeHeaderAlert}
					/>
					<b className='text-left'>Content Alert</b>
					<input
						type='text'
						name='content'
						className='form-control'
						value={this.state.content}
						onChange={this.changeContentAlert}
					/>
				</div>
				<div className='col-6 mx-auto mt-5 border p-3'>
					<h4 className='bg-info mx-auto text-center p-3 mt-2'>
						Body Mass Index (BMI)
					</h4>
					<hr />
					<div className='form-group row'>
						<label for='berat' className='col-sm-2 col-form-label'>
							Berat (Kg)
						</label>
						<div class='col-sm-10'>
							<input
								type='number'
								className='form-control'
								id='berat'
								min='0'
								placeholder='0'
								onChange={this.UbahBerat}
							/>
						</div>
					</div>
					<div className='form-group row'>
						<label for='tinggi' className='col-sm-2 col-form-label'>
							Tinggi (M)
						</label>
						<div class='col-sm-10'>
							<input
								type='number'
								className='form-control'
								id='tinggi'
								placeholder='0'
								onChange={this.UbahTinggi}
							/>
						</div>
					</div>
					<button
						type='button'
						class='btn btn-primary btn-lg btn-block'
						onClick={this.HitungBMI}
					>
						Hitung
					</button>
					<h4 className='mx-auto text-center px-3 mt-4'>Hasil</h4>
					<input
						type='text'
						className='form-control'
						readonly
						value={this.state.bmiStatus}
					/>
				</div>
				<div className='col-6 mx-auto mt-5 border p-3'>
					<h4 className='bg-info mx-auto text-center p-3 mt-2'>Cicilan Bank</h4>
					<hr />
					<div className='form-group row'>
						<label for='nominal' className='col-sm-3 col-form-label'>
							Nominal (Rp)
						</label>
						<div class='col-sm-9'>
							<input
								type='number'
								className='form-control'
								id='nominal'
								min='0'
								placeholder='0'
								onChange={this.UbahNominal}
							/>
						</div>
					</div>
					<div className='form-group row'>
						<label for='bunga' className='col-sm-3 col-form-label'>
							Bunga (%)
						</label>
						<div class='col-sm-9'>
							<input
								type='number'
								className='form-control'
								id='bunga'
								placeholder='0'
								onChange={this.UbahBunga}
							/>
						</div>
					</div>
					<div className='form-group row'>
						<label for='periode' className='col-sm-3 col-form-label'>
							Periode
						</label>
						<div className='col-sm-9'>
							<select
								name=''
								id='periode'
								className='form-control'
								onChange={this.UbahPeriode}
							>
								<option value='' selected disabled>
									-- PILIH --
								</option>
								{option.map((item) => (
									<option value={item}>{item} Bulan</option>
								))}
							</select>
						</div>
					</div>
					<button
						type='button'
						class='btn btn-primary btn-lg btn-block'
						onClick={this.Hitungcicilan}
					>
						Hitung
					</button>
					<h4 className='mx-auto text-center px-3 mt-4'>Hasil</h4>
					<input
						type='text'
						className='form-control'
						readonly
						value={this.state.cicilan}
					/>
				</div>
				<div className='col-6 mx-auto mt-5 border p-3'>
					<h4 className='bg-danger mx-auto text-center p-3 mt-2 text-light'>
						Hitung Harga Akhir
					</h4>
					<hr />
					<div className='form-group row'>
						<label for='harga-awal' className='col-sm-3 col-form-label'>
							Harga Awal (Rp)
						</label>
						<div class='col-sm-9'>
							<input
								type='number'
								className='form-control'
								id='harga-awal'
								min='0'
								placeholder='0'
								onChange={this.UbahHargaAwal}
							/>
						</div>
					</div>
					<div className='form-group row'>
						<label for='ppn' className='col-sm-3 col-form-label'>
							PPN (%)
						</label>
						<div class='col-sm-9'>
							<input
								type='number'
								className='form-control'
								id='ppn'
								placeholder='0'
								onChange={this.UbahPPN}
							/>
						</div>
					</div>
					<div className='form-group row'>
						<label for='diskon' className='col-sm-3 col-form-label'>
							Diskon (%)
						</label>
						<div className='col-sm-9'>
							<input
								name=''
								id='diskon'
								className='form-control'
								onChange={this.UbahDiskon}
								placeholder='0'
							/>
						</div>
					</div>
					<button
						type='button'
						class='btn btn-danger btn-lg btn-block'
						onClick={this.HitungHargaAkhir}
					>
						Hitung
					</button>
					<h4 className='mx-auto text-center px-3 mt-4'>Harga Akhir</h4>
					<input
						type='text'
						className='form-control'
						readonly
						value={this.state.hargaAkhir}
					/>
				</div>
				<div className='col-6 mx-auto mt-5 border p-3 mb-3'>
					<h4 className='bg-dark mx-auto text-center p-3 mt-2 text-light'>
						Konversi Bilangan
					</h4>
					<hr />
					<div className='form-group row'>
						<label for='bilangan' className='col-sm-3 col-form-label'>
							Bilangan
						</label>
						<div class='col-sm-9'>
							<input
								type='text'
								className='form-control'
								id='bilangan'
								min='0'
								placeholder='0'
								onChange={this.UbahBilangan}
							/>
						</div>
					</div>
					<div className='form-group row'>
						<label for='dari' className='col-sm-3 col-form-label'>
							Ubah Dari
						</label>
						<div class='col-sm-9'>
							<select
								className='form-control'
								id='dari'
								placeholder='0'
								onChange={this.UbahDari}
							>
								<option value='' selected disabled>
									-- PILIH --
								</option>
								{bilangan.map((item) => (
									<option value={item}>{item}</option>
								))}
							</select>
						</div>
					</div>
					<div className='form-group row'>
						<label for='menjadi' className='col-sm-3 col-form-label'>
							Menjadi
						</label>
						<div className='col-sm-9'>
							<select
								name=''
								id='menjadi'
								className='form-control'
								onChange={this.UbahMenjadi}
								placeholder='0'
							>
								<option value='' selected disabled>
									-- PILIH --
								</option>
								{bilangan.map((item) => (
									<option value={item}>{item}</option>
								))}
							</select>
						</div>
					</div>
					<button
						type='button'
						class='btn btn-dark btn-lg btn-block'
						onClick={this.Konversi}
					>
						Hitung
					</button>
					<h4 className='mx-auto text-center px-3 mt-4'>Hasil</h4>
					<input
						type='text'
						className='form-control'
						readonly
						value={this.state.HasilKonversi}
					/>
				</div>
			</div>
		)
	}
}

export default App
