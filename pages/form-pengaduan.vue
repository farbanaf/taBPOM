<template>
    <div class="container">
        <div class="alert-message alert-success" v-if="success_message">{{ success_message }}</div>
        <div class="card-form-pengaduan">
            <h1 class="title">Form Pengaduan</h1>
            <div class="form-group-pengaduan">
                <label for="">Nama Lengkap <small class="required">*</small></label>
                <input type="text" class="form-control-pengaduan">
            </div>
            <div class="form-group-pengaduan">
                <label for="">Jenis Kelamin <small class="required">*</small></label>
                <select name="" id="" class="form-control-pengaduan">
                    <option value="">--</option>
                    <option value="laki-laki">Laki-Laki</option>
                    <option value="perempuan">Perempuan</option>
                </select>
            </div>
            <div class="form-group-pengaduan">
                <label for="">Pekerjaan <small class="required">*</small></label>
                <select class="form-control-pengaduan ">
                    <option value=""> -- </option>
                    <option value="AP">Apoteker</option>
                    <option value="DR">Dokter</option>
                    <option value="KA">Karyawan</option>
                    <option value="LSM">LSM</option>
                    <option value="NL">Nakes Lain</option>
                    <option value="PL">Pengacara/Legal</option>
                    <option value="PM">Pelajar/Mahasiswa</option>
                    <option value="PU">Pelaku Usaha</option>
                    <option value="WA">Wartawan</option>
                    <option value="UM">Umum</option>
                </select>
            </div>
            <div class="form-group-pengaduan">
                <label for="">Alamat <small class="required">*</small></label>
                <textarea name="" id="" rows="2" class="form-control-pengaduan"></textarea>
            </div>
            <div class="form-group-pengaduan">
                <label for="">Email <small class="required">*</small></label>
                <input type="email" class="form-control-pengaduan">
            </div>
            <div class="form-group-pengaduan">
                <label for="">Medsos</label>
                <input type="text" class="form-control-pengaduan">
            </div>
            <div class="form-group-pengaduan">
                <label for="">No Telp/HP <small class="required">*</small></label>
                <input type="text" class="form-control-pengaduan">
            </div>
            <div class="form-group-pengaduan">
                <label for="">Pengaduan <small class="required">*</small></label>
                <textarea name="" id="" rows="3" class="form-control-pengaduan"></textarea>
            </div>
            <div class="form-group-pengaduan">
                <label for="">Alamat Perolehan Produk <small class="required">*</small></label>
                <textarea name="" id="" rows="2" class="form-control-pengaduan"></textarea>
            </div>
            <div class="form-group-pengaduan">
                <label for="">Dokumen Pendukung</label>
                <input type="file" class="form-control-pengaduan">
            </div>
            <div class="form-group-pengaduan">
                <button class="btn-submit-pengaduan" @click="submit">Kirim</button>
            </div>
        </div>
    </div>
</template>
<style lang="scss">

    .alert-message {
        display: inline-block;
        padding: .5rem .8rem;
        border-radius: 8px;
        background: #51a23c;
        color: #fff;
        
    }
    
    .card-form-pengaduan {
        width: 100%;
        max-width: 568px;
        border-radius: 10px;
        background: #fff;
        border: 1px solid #ddd;
        padding: 1.5rem;
        margin-top: 1rem;

        .title {
            font-size: 20px;
            font-weight: 600;
            margin-bottom: 1rem;
        }

        .form-group-pengaduan {
            margin-bottom: .5rem;
            position: relative;

            label {
                display: block;
                margin-bottom: .5rem;

                .required {
                    color: #d10000;
                }
            }
        }

        .form-control-pengaduan {
            outline: none;
            display: block;
            min-width: 300px;
            width: 100%;
            height: calc(1.5em + 1.3rem + 2px);
            padding: 0.65rem 1rem;
            font-size: 1rem;
            font-weight: 400;
            line-height: 1.5;
            color: #495057;
            background-color: #fff;
            background-clip: padding-box;
            border: 1px solid #e2e5ec;
            border-radius: 10px;
        }

        .btn-submit-pengaduan {
            display: inline-block;
            font-weight: 400;
            color: #212529;
            text-align: center;
            vertical-align: middle;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            background-color: transparent;
            border: 1px solid transparent;
            padding: 0.65rem 1rem;
            font-size: 1rem;
            line-height: 1.5;
            border-radius: 0.25rem;
            background-color: #054586;
            border-color: #054586;
            color: #fff;
            cursor: pointer;
        }

    }
</style>
<script>
export default {
    name: 'form-pengaduan',
    data(){
        return {
            success_message: ''
        }
    },
    methods: {
        submit(){
            this.success_message = "Pengaduan berhasil dikirim"
        }
    }
}
</script>