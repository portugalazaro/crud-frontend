class SalveData  extends actions {
    constructor(){
        super();
        this._data = localStorage.getItem('data');
        this._btnSend = document.querySelector('button');
        this._inputs = document.querySelectorAll('form input');
        this.SendForm();
        this.removeAll()
        this.removeItem();
        this.checkedAll();
    }

    SendForm(){
        let btnSend = this._btnSend;
        btnSend.addEventListener('click', e=>{
            e.preventDefault();
            let dados = this._inputs;
            
            this.checkedData(dados)
            this.clearData(this._inputs)
        })
    }

    clearData(inputs) {
        inputs.forEach(element=> {
            if(element.value != '') {
                element.value = ''
            }
        });
    }


    checkedData(dados){
        let check = ['nome','email', 'endereco','fone'];
        let obj = {};

        [...dados].forEach(item=> {

            if(check.indexOf(item.name) > -1 && item.value != ''){
                obj[item.name] = item.value;

                if(Object.keys(obj).length == 4 ){
                    this.SetLocalStorage(obj);
                    this._modal.classList.remove('active');
                    item.classList.remove('valida')
                    window.location = 'index.html';
                }
                
            }else if (item.value == '') {
                item.classList.add('valida')
            }
        })
    }

    getLocalstorage(){
        let users = []; 

        if(localStorage.getItem("data")) {
            users = JSON.parse(localStorage.getItem("data"))
        }

        return users;
    }

    SetLocalStorage(insert){

        if(this.getLocalstorage() == '') {

            let users = this.getLocalstorage()
            users.push(insert);
            localStorage.setItem("data", JSON.stringify(users))
        }else {
            let users = this.getLocalstorage()
            users.push(insert);
            localStorage.data = JSON.stringify(users);
        }
    }


    removeItem(){
        let remove = document.querySelectorAll('.remove')
        let dados = this.getLocalstorage();

        [...remove].forEach(element=> {

            element.addEventListener('click', e=>{
                console.log('aqui')
                if(dados){
                    dados.splice(dados.indexOf(element.dataset.id), 1);
                    localStorage.data = JSON.stringify(dados);
                    window.location = 'index.html';
                }
    
            })

        })
    }


    removeAll(){
        let btn_remove = document.querySelector('.removeItem');
        let active_class = document.querySelector('.container-remove');
        let confirm = document.querySelectorAll('.modal-remove .remove-item span');

        btn_remove.addEventListener('click', event=> {
            active_class.classList.add('active-remove')
            
            confirm.forEach(element=> {
                element.addEventListener('click', e => {
                    if(element.dataset.confirmacao == 'yes') {
                        localStorage.removeItem('data')
                        active_class.classList.remove('active-remove')
                        window.location = 'index.html';
                    }else if (element.dataset.confirmacao == 'not'){
                        active_class.classList.remove('active-remove')

                    }
                })
            })

        })
    }



    checkedAll(){
        let input = document.querySelector('thead input')
        let inputs = document.querySelectorAll('tbody input');
        let span = document.querySelectorAll('.conteudo-table  tr .check.box span')

        input.addEventListener('click', e => {

            if(input.checked){
                [...inputs].forEach(inputss=>{

                    inputss.checked = true;

                    [...span].forEach(e=> {
                        e.innerHTML = 'check_box'

                    })
                    
                })
            }else {

                [...inputs].forEach(inputss=>{

                    inputss.checked = false;

                    [...span].forEach(e=> {
                        e.innerHTML = 'check_box_outline_blank'

                    })
                    
                })

            }

        })

    }

}

new SalveData();



