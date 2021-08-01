function dataHandling2(input){

    let dataArray = input


    dataArray.splice(1, 4, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro")

    let hasilSplit = dataArray[3].split('/')



    let tanggal = 0
    let bulan = 'tidak diketahui'
    let bulan2 = 'tidak diketahui'
    let tahun = 0




// tgl
    for(i = 1 ; i <= 31 ; i++){

        
        switch (true) {
            case hasilSplit[0] == i:
                tanggal = i
                break;
        
            default:
                tanggal
                break;
        }
    }


        switch (true) {
            case hasilSplit[1] == 01:
                bulan = 'Januari'
                break;
            
                        case hasilSplit[1] == 02:
                            bulan = 'Februari'
                            break;

                                    case hasilSplit[1] == 03:
                                        bulan = 'Maret'
                                        break;
                
                                            case hasilSplit[1] == 04:
                                                bulan = ' April'
                                                break;

                                            case hasilSplit[1] == 05:
                                                bulan = ' Mei'
                                                break;

                                                        case hasilSplit[1] == 06:
                                                            bulan = ' Juni'
                                                            break;

                                                            case hasilSplit[1] == 07:
                                                                bulan = ' Juli'
                                                                break;

                                                                case hasilSplit[1] == 08:
                                                                    bulan = 'Agustus'
                                                                    break;

                                                                    case hasilSplit[1] == 09:
                                                                        bulan = ' September'
                                                                        break

                                                                        case hasilSplit[1] == 10:
                                                                            bulan = 'Oktober'
                                                                            break

                                                                            case hasilSplit[1] == 11:
                                                                                bulan = 'November'
                                                                                break

                                                                                case hasilSplit[1] == 12:
                                                                                    bulan = ' Desember'
                                                                                    break

            default:
                bulan
                break;
        }

        for (i = 1; i <= 12 ; i++)  {
            switch (true) {
                case hasilSplit[1] == i:
                    bulan2 = '0' + i
                    break;
            
                default:
                    bulan2
                    break;
            }             
        }
        
        for (i = 1988; i <= 1990; i++) {
            switch (true) {
                case hasilSplit[2] == i:
                    tahun = i
                    break;
            
                default:
                    tahun
                    break;
            }
            
        }

        let hasilBalik = hasilSplit.sort(function(a, b){return b-a})

        let hasilGabung = tanggal + ' - ' + bulan2 + " - " + tahun

        let hasilConvert = dataArray[1].toString()

        let hasilSlice = hasilConvert.slice(0, 14)

        console.log(dataArray);
        console.log(bulan);
        console.log(hasilBalik);
        console.log(hasilGabung);
        console.log(hasilSlice);
    
    }


let data = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]; 
dataHandling2(data)

