class getData {

    constructor() {
        this._registro = localStorage.getItem('data');
        this.montaData()
    }

    montaData(){

        let tbody = document.querySelector('tbody');

        if(this._registro){
            JSON.parse(this._registro).forEach(row=>{
            let tr = `<tr>
                <td>
                    <div class="check box">
                        <span class="large material-icons">check_box_outline_blank </span>
                        <input type="checkbox">
                    </div>
                </td>
                <td>${row.nome}</td>
                <td>${row.email}</td>
                <td>${row.endereco}</td>
                <td>${row.fone}</td>
                <td>
                    <div class="check">
                        <span class="large material-icons action edit">edit</span>
                        <span data-id="${row.nome}" class="large material-icons action remove">delete_forever</span>
                    </div>
                </td>
            </tr>`

            tbody.innerHTML += tr;

            })
        }

    }

}

new getData();